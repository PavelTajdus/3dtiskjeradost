export function slugifyTag(tag: string): string {
	return tag
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

export function getTagHref(tag: string): string {
	return `/tag/${slugifyTag(tag)}/`;
}
