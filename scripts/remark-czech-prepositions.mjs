import { visit } from 'unist-util-visit';

const NBSP = '\u00A0';

// Jednopísmenné předložky (k, s, v, z, o, u) a spojky (a, i) dle ÚJČ.
// Oba velikosti písmen.
const PATTERN = /(?<=^|[\s(„""'\-–—])([ksvzouaiKSVZOUAI]) /g;

export default function remarkCzechPrepositions() {
	return (tree) => {
		visit(tree, 'text', (node) => {
			if (typeof node.value !== 'string' || node.value.length === 0) {
				return;
			}
			node.value = node.value.replace(PATTERN, `$1${NBSP}`);
		});
	};
}
