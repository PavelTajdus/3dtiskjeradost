import { getCollection } from 'astro:content';
import { SITE_URL } from '../consts';
import { slugifyTag } from './tags';

type SitemapEntry = {
	loc: string;
	lastmod: Date;
};

function escapeXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

function absoluteUrl(pathname: string): string {
	return new URL(pathname, SITE_URL).toString();
}

export async function getSitemapEntries(): Promise<SitemapEntry[]> {
	const posts = (await getCollection('blog'))
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	const latestPostDate = posts.reduce(
		(latest, post) => {
			const candidate = post.data.updatedDate ?? post.data.pubDate;
			return candidate > latest ? candidate : latest;
		},
		new Date('2023-01-01T00:00:00.000Z'),
	);

	const tags = [...new Set(posts.flatMap((post) => post.data.tags ?? []))].sort((a, b) => a.localeCompare(b, 'cs'));

	const staticEntries: SitemapEntry[] = [
		{ loc: absoluteUrl('/'), lastmod: latestPostDate },
		{ loc: absoluteUrl('/blog/'), lastmod: latestPostDate },
		{ loc: absoluteUrl('/o-mne/'), lastmod: latestPostDate },
		{ loc: absoluteUrl('/podpora/'), lastmod: latestPostDate },
		{ loc: absoluteUrl('/pro-zacatecniky/'), lastmod: latestPostDate },
	];

	const postEntries: SitemapEntry[] = posts.map((post) => ({
		loc: absoluteUrl(`/blog/${post.id}/`),
		lastmod: post.data.updatedDate ?? post.data.pubDate,
	}));

	const tagEntries: SitemapEntry[] = tags.map((tag) => {
		const lastmod = posts.reduce((latest, post) => {
			if (!(post.data.tags ?? []).includes(tag)) return latest;
			const candidate = post.data.updatedDate ?? post.data.pubDate;
			return candidate > latest ? candidate : latest;
		}, new Date('2023-01-01T00:00:00.000Z'));

		return {
			loc: absoluteUrl(`/tag/${slugifyTag(tag)}/`),
			lastmod,
		};
	});

	return [...staticEntries, ...postEntries, ...tagEntries].sort((a, b) => a.loc.localeCompare(b.loc));
}

export async function getLatestSitemapDate(): Promise<Date> {
	const entries = await getSitemapEntries();
	return entries.reduce((latest, entry) => (entry.lastmod > latest ? entry.lastmod : latest), new Date('2023-01-01T00:00:00.000Z'));
}

export function renderUrlSet(entries: SitemapEntry[]): string {
	const urls = entries
		.map(
			(entry) => `<url><loc>${escapeXml(entry.loc)}</loc><lastmod>${entry.lastmod.toISOString()}</lastmod></url>`,
		)
		.join('');

	return `<?xml version="1.0" encoding="UTF-8"?>` +
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
}

export function renderSitemapIndex(entries: Array<{ loc: string; lastmod: Date }>): string {
	const sitemaps = entries
		.map(
			(entry) => `<sitemap><loc>${escapeXml(entry.loc)}</loc><lastmod>${entry.lastmod.toISOString()}</lastmod></sitemap>`,
		)
		.join('');

	return `<?xml version="1.0" encoding="UTF-8"?>` +
		`<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemaps}</sitemapindex>`;
}
