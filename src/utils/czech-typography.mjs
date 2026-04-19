export const NBSP = '\u00A0';

const CZECH_ONE_LETTER_WORD_PATTERN = /(?<=^|[\s(„""'\-–—])([ksvzouaiKSVZOUAI]) /g;

export function applyCzechTypography(text) {
	if (typeof text !== 'string' || text.length === 0) {
		return text;
	}

	return text.replace(CZECH_ONE_LETTER_WORD_PATTERN, `$1${NBSP}`);
}

export function normalizeSearchText(text) {
	if (typeof text !== 'string' || text.length === 0) {
		return '';
	}

	return text.replaceAll(NBSP, ' ').replace(/\s+/g, ' ').trim();
}
