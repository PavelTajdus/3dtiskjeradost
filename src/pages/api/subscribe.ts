export const prerender = false;

import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

const LISTMONK_URL = 'https://newsletter.hotend.cz/api/public/subscription';
const LIST_UUID = 'a7353135-0117-4bcd-a34d-790e47b9b07c';
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export const POST: APIRoute = async ({ request }) => {
	const headers = { 'Content-Type': 'application/json' };

	let body: { email?: string; turnstileToken?: string };
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: 'Neplatný požadavek.' }), {
			status: 400,
			headers,
		});
	}

	const { email, turnstileToken } = body;

	if (!email || !turnstileToken) {
		return new Response(JSON.stringify({ error: 'Chybí e-mail nebo ověření.' }), {
			status: 400,
			headers,
		});
	}

	// Verify Turnstile token with Cloudflare
	const secret = env.TURNSTILE_SECRET_KEY;
	if (!secret) {
		console.error('TURNSTILE_SECRET_KEY is not set');
		return new Response(JSON.stringify({ error: 'Chyba konfigurace serveru.' }), {
			status: 500,
			headers,
		});
	}

	const turnstileResponse = await fetch(TURNSTILE_VERIFY_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			secret,
			response: turnstileToken,
			remoteip: request.headers.get('CF-Connecting-IP') || undefined,
		}),
	});

	const turnstileResult = await turnstileResponse.json() as { success: boolean };

	if (!turnstileResult.success) {
		return new Response(JSON.stringify({ error: 'Ověření proti botům selhalo. Zkus to znovu.' }), {
			status: 403,
			headers,
		});
	}

	// Turnstile OK → call Listmonk
	try {
		const listmonkResponse = await fetch(LISTMONK_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email,
				list_uuids: [LIST_UUID],
			}),
		});

		const listmonkData = await listmonkResponse.json() as Record<string, any>;

		return new Response(JSON.stringify(listmonkData), {
			status: listmonkResponse.status,
			headers,
		});
	} catch {
		return new Response(JSON.stringify({ error: 'Nepodařilo se spojit s newsletterovým serverem.' }), {
			status: 502,
			headers,
		});
	}
};
