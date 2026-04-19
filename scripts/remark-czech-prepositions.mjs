import { applyCzechTypography } from '../src/utils/czech-typography.mjs';

function visitTextNodes(node, visitor) {
	if (!node || typeof node !== 'object') {
		return;
	}

	if (node.type === 'text') {
		visitor(node);
	}

	if (!Array.isArray(node.children)) {
		return;
	}

	for (const child of node.children) {
		visitTextNodes(child, visitor);
	}
}

export default function remarkCzechPrepositions() {
	return (tree) => {
		visitTextNodes(tree, (node) => {
			if (typeof node.value !== 'string' || node.value.length === 0) {
				return;
			}
			node.value = applyCzechTypography(node.value);
		});
	};
}
