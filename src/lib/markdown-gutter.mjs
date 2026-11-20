const markers = {
  blockquote: '>',
  table: '|',
};

/** @type {NonNullable<Parameters<typeof import('@astrojs/markdown-satteri').satteri>[0]>['hastPlugins']} */
export const markdownGutter = [{
  name: 'markdown-gutter',
  element: {
    filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'li', 'table', 'p'],
    visit(node, ctx) {
      const tag = node.tagName;
      let marker = markers[tag];

      if (/^h[1-6]$/.test(tag)) {
        if (node.properties?.id === 'footnote-label') return;
        marker = '#'.repeat(Number(tag[1]));
      } else if (tag === 'li') {
        if (String(node.properties?.id ?? '').startsWith('user-content-fn-')) return;
        const parent = ctx.parent(node);
        if (parent?.type !== 'element') return;

        if (parent.tagName === 'ol') {
          let number = Number(parent.properties?.start ?? 1);
          for (const child of parent.children.slice(0, ctx.indexOf(node))) {
            if (child.type === 'element' && child.tagName === 'li') number += 1;
          }
          marker = `${number}.`;
        } else {
          marker = '-';
        }

      } else if (tag === 'p') {
        const content = node.children.filter((child) => child.type !== 'text' || child.value.trim());
        if (content.length === 1 && content[0].type === 'element' && content[0].tagName === 'img') {
          marker = '![]';
        }
      }

      if (!marker) return;
      const label = {
        type: /** @type {const} */ ('element'),
        tagName: 'span',
        properties: { ariaHidden: 'true', className: ['markdown-marker'], dataMarker: marker },
        children: [],
      };

      if (tag === 'table') {
        ctx.wrapNode(node, {
          type: 'element',
          tagName: 'div',
          properties: { className: ['markdown-block'] },
          children: [label],
        });
        return;
      }

      const first = node.children.find((child) => child.type === 'element' || child.type === 'text' && child.value.trim());
      const container = first?.type === 'element' && first.tagName === 'p' ? first : node;
      ctx.setProperty(container, 'dataMarked', '');
      ctx.prependChild(container, label);
      if (tag === 'li') ctx.setProperty(node, 'dataMarkedItem', '');
    },
  },
}];
