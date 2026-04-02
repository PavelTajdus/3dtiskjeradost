// @ts-check

import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://3dtiskjeradost.cz',
	integrations: [mdx()],
	image: {
		domains: ['3dtiskjeradost.cz', 'commons.wikimedia.org', 'img.youtube.com', 'i.ytimg.com'],
	},
	vite: {
		server: {
			allowedHosts: ['3dtisk.docore.cz', 'localhost'],
		},
	},
});
