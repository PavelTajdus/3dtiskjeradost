import { SITE_URL } from '../consts';
import { getLatestSitemapDate, renderSitemapIndex } from '../utils/sitemap';

export async function GET() {
	const lastmod = await getLatestSitemapDate();

	return new Response(
		renderSitemapIndex([
			{
				loc: new URL('/sitemap.xml', SITE_URL).toString(),
				lastmod,
			},
		]),
		{
			headers: {
				'Content-Type': 'application/xml; charset=utf-8',
			},
		},
	);
}
