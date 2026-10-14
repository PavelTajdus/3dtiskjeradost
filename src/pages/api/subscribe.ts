// Server-side API endpoint pro newsletter s Turnstile ověřením
export const prerender = false;

import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

const MAILERLITE_URL = 'https://connect.mailerlite.com/api/subscribers';
const GROUP_ID = '100410003201984317'; // Newsletter Pod Tryskou
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const ALLOWED_HOSTS = new Set(['3dtiskjeradost.cz', 'www.3dtiskjeradost.cz', 'dev-3dtiskjeradost.pavel-ad8.workers.dev']);

export const POST: APIRoute = async ({ request }) => {
	const headers = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' };
	const reply = (data: unknown, status = 200) => new Response(JSON.stringify(data), { status, headers });

	let body: { email?: unknown; turnstileToken?: unknown; consent?: unknown } | null;
	try {
		body = await request.json();
	} catch {
		return reply({ error: 'Neplatný požadavek.' }, 400);
	}

	if (!body || typeof body.email !== 'string' || body.email.length > 254 ||
		!/^\s*[^@\s]+@[^@\s]+\.[^@\s]+\s*$/.test(body.email) || body.consent !== true ||
		typeof body.turnstileToken !== 'string' || !body.turnstileToken) {
		return reply({ error: 'Chybí platný e-mail, souhlas nebo ověření.' }, 400);
	}
	const email = body.email.trim().toLowerCase();

	const settings = env as unknown as { TURNSTILE_SECRET_KEY?: string; MAILERLITE_API_KEY?: string };
	if (!settings.TURNSTILE_SECRET_KEY || !settings.MAILERLITE_API_KEY) {
		return reply({ error: 'Chyba konfigurace serveru.' }, 503);
	}

	try {
		const turnstileResponse = await fetch(TURNSTILE_VERIFY_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			signal: AbortSignal.timeout(10000),
			body: JSON.stringify({
				secret: settings.TURNSTILE_SECRET_KEY,
				response: body.turnstileToken,
				remoteip: request.headers.get('CF-Connecting-IP') || undefined,
			}),
		});
		if (!turnstileResponse.ok) throw new Error('Verification unavailable');
		const verification = await turnstileResponse.json() as { success?: boolean; action?: string; hostname?: string };
		if (!verification.success || verification.action !== 'newsletter' || !ALLOWED_HOSTS.has(verification.hostname ?? '')) {
			return reply({ error: 'Ověření proti botům selhalo. Zkus to znovu.' }, 403);
		}

		const providerHeaders = {
			Authorization: `Bearer ${settings.MAILERLITE_API_KEY}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		};
		const subscriberUrl = `${MAILERLITE_URL}/${encodeURIComponent(email)}`;
		const existing = await fetch(subscriberUrl, { headers: providerHeaders, signal: AbortSignal.timeout(10000) });
		if (existing.status !== 404) {
			if (!existing.ok) throw new Error('Subscriber lookup failed');
			const { data } = await existing.json() as { data: { status: string } };
			// Never reactivate an opt-out or a suppressed address, even on repeat signup.
			if (['unsubscribed', 'bounced', 'junk'].includes(data.status)) {
				return reply({ data: { suppressed: true, has_optin: false } });
			}
			if (!['active', 'unconfirmed'].includes(data.status)) throw new Error('Unknown subscriber status');
		}

		// Non-destructive upsert retains other groups and the account's API opt-in policy.
		const saved = await fetch(MAILERLITE_URL, {
			method: 'POST', headers: providerHeaders, signal: AbortSignal.timeout(10000),
			body: JSON.stringify({ email, groups: [GROUP_ID] }),
		});
		if (!saved.ok) throw new Error('Subscription failed');
		const readback = await fetch(subscriberUrl, { headers: providerHeaders, signal: AbortSignal.timeout(10000) });
		if (!readback.ok) throw new Error('Subscription verification failed');
		const { data } = await readback.json() as { data: { status: string; groups: { id: string }[] } };
		if (!['active', 'unconfirmed'].includes(data.status) || !data.groups?.some((group) => group.id === GROUP_ID)) {
			throw new Error('Subscription verification failed');
		}
		return reply({ data: { has_optin: data.status === 'unconfirmed' } });
	} catch {
		return reply({ error: 'Nepodařilo se spojit s newsletterovým serverem. Zkus to prosím znovu.' }, 502);
	}
};
