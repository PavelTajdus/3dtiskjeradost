function visitLinkNodes(node, visitor) {
	if (!node || typeof node !== 'object') {
		return;
	}

	if (node.type === 'link') {
		visitor(node);
	}

	if (!Array.isArray(node.children)) {
		return;
	}

	for (const child of node.children) {
		visitLinkNodes(child, visitor);
	}
}

export default function remarkExternalLinks() {
	return (tree) => {
		visitLinkNodes(tree, (node) => {
			if (typeof node.url !== 'string' || !/^https?:\/\//i.test(node.url)) {
				return;
			}

			node.data = node.data || {};
			node.data.hProperties = {
				...(node.data.hProperties || {}),
				target: '_blank',
				rel: 'noopener noreferrer',
			};
		});
	};
}
