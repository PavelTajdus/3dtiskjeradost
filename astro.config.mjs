// @ts-check

import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';
import remarkCzechPrepositions from './scripts/remark-czech-prepositions.mjs';
import remarkExternalLinks from './scripts/remark-external-links.mjs';

export default defineConfig({

	site: 'https://3dtiskjeradost.cz',
	// The site does not use Astro sessions. Keep a null driver so the Cloudflare
	// adapter does not auto-provision a SESSION KV namespace on deploy.
	session: {
		driver: {
			entrypoint: 'unstorage/drivers/null',
		},
	},
	adapter: cloudflare(),
	integrations: [mdx()],
	markdown: {
		remarkPlugins: [remarkCzechPrepositions, remarkExternalLinks],
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
