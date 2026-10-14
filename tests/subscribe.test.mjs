import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { stripTypeScriptTypes } from 'node:module';

const environment = { TURNSTILE_SECRET_KEY: 'test-turnstile', MAILERLITE_API_KEY: 'test-key' };
let source = await readFile(new URL('../src/pages/api/subscribe.ts', import.meta.url), 'utf8');
source = source.replace("import { env } from 'cloudflare:workers';", 'const env = globalThis.__subscribeEnv;');
globalThis.__subscribeEnv = environment;
const { POST } = await import(`data:text/javascript;base64,${Buffer.from(stripTypeScriptTypes(source)).toString('base64')}`);
const group = '100410003201984317';
const subscriber = (status = 'active', groups = [{ id: group }]) => ({ data: { id: '123', status, groups } });
const request = (body) => new Request('https://3dtiskjeradost.cz/api/subscribe', {
  method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
});
const valid = { email: 'reader@example.cz', consent: true, turnstileToken: 'test-token' };
const verified = { success: true, action: 'newsletter', hostname: '3dtiskjeradost.cz' };
async function run(body, responses) {
  const calls = [];
  globalThis.fetch = async (url, options) => {
    calls.push({ url: String(url), ...options });
    const next = responses.shift();
    assert.ok(next, 'unexpected external request');
    if (next instanceof Error) throw next;
    return Response.json(next.body, { status: next.status ?? 200 });
  };
  const response = await POST({ request: request(body) });
  return { status: response.status, body: await response.json(), calls };
}

test('adds a consenting reader only to Pod Tryskou and verifies the saved group', async () => {
  const result = await run({ ...valid, email: ' Reader@Example.cz ' }, [
    { body: verified }, { status: 404, body: {} },
    { status: 201, body: subscriber() }, { body: subscriber() },
  ]);
  assert.equal(result.status, 200);
  assert.equal(result.calls[1].url, 'https://connect.mailerlite.com/api/subscribers/reader%40example.cz');
  assert.equal(result.calls[2].url, 'https://connect.mailerlite.com/api/subscribers');
  assert.deepEqual(JSON.parse(result.calls[2].body), { email: 'reader@example.cz', groups: [group] });
  assert.equal(result.calls[2].headers.Authorization, 'Bearer test-key');
  assert.equal(result.calls.length, 4);
  assert.equal(result.body.data.has_optin, false);
});

test('requires explicit consent and a valid email before external calls', async () => {
  for (const body of [null, {}, { ...valid, consent: false }, { ...valid, consent: undefined }, { ...valid, email: 123 }, { ...valid, email: 'bad' }, { ...valid, turnstileToken: '' }]) {
    const result = await run(body, []);
    assert.equal(result.status, 400);
    assert.equal(result.calls.length, 0);
  }
});

test('fails closed when the MailerLite secret is absent', async () => {
  delete environment.MAILERLITE_API_KEY;
  try { assert.equal((await run(valid, [])).status, 503); }
  finally { environment.MAILERLITE_API_KEY = 'test-key'; }
});

test('rejects failed, wrong-action and wrong-host bot verification', async () => {
  for (const verification of [{ success: false }, { ...verified, action: 'other' }, { ...verified, hostname: 'evil.example' }]) {
    const result = await run(valid, [{ body: verification }]);
    assert.equal(result.status, 403);
    assert.equal(result.calls.length, 1);
  }
});

test('never reactivates unsubscribed, bounced or junk readers', async () => {
  for (const status of ['unsubscribed', 'bounced', 'junk']) {
    const result = await run(valid, [{ body: verified }, { body: subscriber(status) }]);
    assert.equal(result.status, 200);
    assert.equal(result.calls.length, 2);
    assert.equal(result.body.data.suppressed, true);
  }
});

test('preserves other groups by using non-destructive upsert without a status override', async () => {
  const result = await run(valid, [{ body: verified }, { body: subscriber('active', [{ id: 'other' }]) }, { body: subscriber() }, { body: subscriber('active', [{ id: 'other' }, { id: group }]) }]);
  assert.equal(result.status, 200);
  assert.deepEqual(JSON.parse(result.calls[2].body), { email: valid.email, groups: [group] });
});

test('reports a confirmation requirement only when MailerLite saved an unconfirmed subscriber', async () => {
  const result = await run(valid, [{ body: verified }, { status: 404, body: {} }, { body: subscriber('unconfirmed') }, { body: subscriber('unconfirmed') }]);
  assert.equal(result.status, 200);
  assert.equal(result.body.data.has_optin, true);
});

test('does not claim success if the saved group cannot be verified', async () => {
  const result = await run(valid, [{ body: verified }, { status: 404, body: {} }, { body: subscriber() }, { body: subscriber('active', []) }]);
  assert.equal(result.status, 502);
});

test('provider and network failures return errors without exposing provider details', async () => {
  for (const failure of [{ status: 429, body: { message: 'private detail' } }, new Error('private detail')]) {
    const result = await run(valid, [{ body: verified }, failure]);
    assert.equal(result.status, 502);
    assert.ok(!JSON.stringify(result.body).includes('private detail'));
    assert.equal(result.calls.length, 2);
  }
});
