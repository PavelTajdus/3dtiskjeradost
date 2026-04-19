import { SITE_URL } from '../consts';
import { NBSP } from './czech-typography.mjs';

const NBSP_TOKEN = '__NBSP__';

function collapseWhitespacePreservingNbsp(text: string): string {
	return text
		.replaceAll(NBSP, NBSP_TOKEN)
		.replace(/\s+/g, ' ')
		.replaceAll(NBSP_TOKEN, NBSP)
		.trim();
}

export function stripMarkdown(markdown: string): string {
	return collapseWhitespacePreservingNbsp(markdown
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/`([^`]+)`/g, '$1')
		.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
		.replace(/[*_~>#-]/g, ' '));
}

export function createMetaDescription(text: string, maxLength = 160): string {
	const normalized = collapseWhitespacePreservingNbsp(
		stripMarkdown(text).replace(/\.{3,}$/g, ''),
	);

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
