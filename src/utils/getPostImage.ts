import type { CollectionEntry } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Returns the hero image for a post.
 * Falls back to the first image found in the markdown body if no heroImage is set.
 */
export function getPostImage(post: CollectionEntry<'blog'>): string | undefined {
	if (post.data.heroImage) {
		return post.data.heroImage;
	}

	// Read the raw markdown and extract first image URL
	const filePath = path.join(process.cwd(), 'src/content/blog', `${post.id}.md`);
	try {
		const content = fs.readFileSync(filePath, 'utf-8');
		const match = content.match(/!\[.*?\]\((https?:\/\/[^)]+)\)/);
		if (match) {
			return match[1];
		}
	} catch {
		// File not found or read error
	}

	return undefined;
}
