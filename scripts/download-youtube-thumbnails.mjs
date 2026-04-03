import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const BLOG_DIR = 'src/content/blog';
const OUTPUT_DIR = 'public/content/images/youtube';

async function main() {
	await mkdir(OUTPUT_DIR, { recursive: true });

	const files = (await readdir(BLOG_DIR)).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
	let count = 0;

	for (const file of files) {
		const filePath = join(BLOG_DIR, file);
		let content = await readFile(filePath, 'utf-8');

		const match = content.match(/heroImage:\s*"(https:\/\/img\.youtube\.com\/vi\/([^/]+)\/maxresdefault\.jpg)"/);
		if (!match) continue;

		const [, url, videoId] = match;
		const localFileName = `${videoId}.jpg`;
		const localPath = join(OUTPUT_DIR, localFileName);
		const publicUrl = `/content/images/youtube/${localFileName}`;

		console.log(`📥 ${file}: stahuju ${videoId}...`);

		try {
			const response = await fetch(url);
			if (!response.ok) {
				console.log(`   ⚠️  HTTP ${response.status} – zkouším hqdefault...`);
				const fallback = await fetch(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
				if (!fallback.ok) {
					console.log(`   ❌ Nelze stáhnout`);
					continue;
				}
				var imageBuffer = Buffer.from(await fallback.arrayBuffer());
			} else {
				var imageBuffer = Buffer.from(await response.arrayBuffer());
			}

			// Optimalizuj pomocí sharp
			const optimized = await sharp(imageBuffer)
				.resize(1600, null, { withoutEnlargement: true })
				.jpeg({ quality: 80, mozjpeg: true })
				.toBuffer();

			await writeFile(localPath, optimized);

			const savedKB = (optimized.length / 1024).toFixed(0);
			console.log(`   ✅ Uloženo: ${savedKB}KB`);

			// Aktualizuj markdown
			content = content.replace(url, publicUrl);
			await writeFile(filePath, content);
			count++;
		} catch (err) {
			console.log(`   ❌ Chyba: ${err.message}`);
		}
	}

	console.log(`\n📊 Hotovo! Staženo a aktualizováno ${count} náhledů.`);
}

main().catch(console.error);
