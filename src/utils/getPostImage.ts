import type { CollectionEntry } from 'astro:content';

/**
 * Returns the hero image for a post.
 * Falls back to the first image found in the markdown body if no heroImage is set.
 */
export function getPostImage(post: CollectionEntry<'blog'>): string | undefined {
	if (post.data.heroImage) {
		return post.data.heroImage;
	}

	const match = post.body.match(/!\[.*?\]\(([^)]+)\)/);
	return match?.[1];
}
