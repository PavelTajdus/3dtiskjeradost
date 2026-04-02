import { getSitemapEntries, renderUrlSet } from '../utils/sitemap';

export async function GET() {
	const entries = await getSitemapEntries();

	return new Response(renderUrlSet(entries), {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
}
