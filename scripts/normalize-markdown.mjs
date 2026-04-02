import fs from 'node:fs';
import path from 'node:path';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/blog');
const upper = 'A-ZÁČĎÉĚÍĹĽŇÓÔŘŠŤÚŮÝŽ';

function normalizeBody(body) {
	return body
		.replace(/\r\n/g, '\n')
		.replace(/\n#\n\n(#{1,5}\s)/g, (_, heading) => `\n#${heading}`)
		.replace(new RegExp(`(^|\\n|\\s|[:.]\\s|—\\s)\\*\\*\\n+([${upper}0-9])`, 'g'), '$1**$2')
		.replace(/(?<!\n)(#{2,6}\s)/g, '\n\n$1')
		.replace(/(?<!\n)(>\s)/g, '\n\n$1')
		.replace(/(?<!\n)(!\[)/g, '\n\n$1')
		.replace(/^(#{2,6}[^\n\[]+)\[/gm, '$1\n\n[')
		.replace(/\[\n+(!\[)/g, '[$1')
		.replace(new RegExp(`^(#{2,6} [^\\n]+?)(?<!\\s)- (?=[${upper}0-9*])`, 'gm'), '$1\n\n- ')
		.replace(new RegExp(`(?<=\\S)- (?=[${upper}0-9*])`, 'g'), '\n- ')
		.replace(new RegExp(`(\\*\\*[^*\\n]+\\*\\*)(?=[${upper}0-9])`, 'g'), '$1\n\n')
		.replace(/\n{3,}/g, '\n\n')
		.replace(/\n#\n(?=\n|$)/g, '\n')
		.replace(/^\n+/, '\n');
}

function normalizeFile(filePath) {
	const original = fs.readFileSync(filePath, 'utf8');
	const match = original.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
	if (!match) {
		return false;
	}

	const [, frontmatter, body] = match;
	const normalizedBody = normalizeBody(body);
	const normalized = `---\n${frontmatter}\n---\n${normalizedBody}`;

	if (normalized !== original) {
		fs.writeFileSync(filePath, normalized);
		return true;
	}

	return false;
}

const files = fs.readdirSync(CONTENT_DIR).filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));
let changed = 0;

for (const file of files) {
	if (normalizeFile(path.join(CONTENT_DIR, file))) {
		changed += 1;
	}
}

console.log(`Normalized ${changed} content file(s).`);
