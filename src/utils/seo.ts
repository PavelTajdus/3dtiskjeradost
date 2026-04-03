import { SITE_URL } from '../consts';

export function stripMarkdown(markdown: string): string {
	return markdown
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/`([^`]+)`/g, '$1')
		.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
		.replace(/[*_~>#-]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

export function createMetaDescription(text: string, maxLength = 160): string {
	const normalized = stripMarkdown(text)
		.replace(/\.{3,}$/g, '')
		.replace(/\s+/g, ' ')
		.trim();

	if (normalized.length <= maxLength) {
		return normalized;
	}

	const sliced = normalized.slice(0, maxLength);
	const safeSlice = sliced.slice(0, Math.max(sliced.lastIndexOf(' '), maxLength - 25)).trim();
	return `${safeSlice}…`;
}

export function getReadingTime(text: string, wordsPerMinute = 220): number {
	const words = stripMarkdown(text).split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / wordsPerMinute));
}

export function absoluteUrl(pathOrUrl: string): string {
	return pathOrUrl.startsWith('http') ? pathOrUrl : new URL(pathOrUrl, SITE_URL).toString();
}
