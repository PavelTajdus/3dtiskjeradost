import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

const IMAGE_DIR = 'public/content/images';
const MAX_WIDTH = 1600;
const PNG_QUALITY = 80;
const JPEG_QUALITY = 80;

async function getFiles(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = [];
	for (const entry of entries) {
		const fullPath = join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...(await getFiles(fullPath)));
		} else {
			files.push(fullPath);
		}
	}
	return files;
}

async function optimizeImage(filePath) {
	const ext = extname(filePath).toLowerCase();
	if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

	// Přeskoč _o (originál) soubory
	if (filePath.includes('_o.')) return;

	const before = (await stat(filePath)).size;
	const image = sharp(filePath);
	const metadata = await image.metadata();

	let pipeline = sharp(filePath);

	// Zmenši na max šířku pokud je větší
	if (metadata.width > MAX_WIDTH) {
		pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
	}

	let buffer;
	if (ext === '.png') {
		buffer = await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toBuffer();
	} else {
		buffer = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
	}

	// Zapiš jen pokud je menší
	if (buffer.length < before) {
		const { writeFile } = await import('node:fs/promises');
		await writeFile(filePath, buffer);
		const saved = ((before - buffer.length) / before * 100).toFixed(1);
		console.log(`✅ ${filePath}: ${(before/1024).toFixed(0)}KB → ${(buffer.length/1024).toFixed(0)}KB (-${saved}%)`);
	} else {
		console.log(`⏭️  ${filePath}: už je optimální`);
	}
}

async function main() {
	console.log('🖼️  Optimalizace obrázků...\n');
	const files = await getFiles(IMAGE_DIR);
	const imageFiles = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f) && !f.includes('_o.'));

	let totalBefore = 0;
	let totalAfter = 0;

	for (const file of imageFiles) {
		const before = (await stat(file)).size;
		totalBefore += before;
		await optimizeImage(file);
		const after = (await stat(file)).size;
		totalAfter += after;
	}

	console.log(`\n📊 Celkem: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB (-${((totalBefore-totalAfter)/totalBefore*100).toFixed(1)}%)`);
}

main().catch(console.error);
