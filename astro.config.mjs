// @ts-check

import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';
import remarkCzechPrepositions from './scripts/remark-czech-prepositions.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://3dtiskjeradost.cz',
	adapter: cloudflare(),
	integrations: [mdx()],
	markdown: {
		remarkPlugins: [remarkCzechPrepositions],
	},
	image: {
		domains: ['3dtiskjeradost.cz', 'commons.wikimedia.org'],
	},
	vite: {
		server: {
			allowedHosts: ['3dtisk.docore.cz', 'localhost'],
		},
	},
});
