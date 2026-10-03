import { createElement } from 'react';
import { parseMarkdown } from '../lib/markdown';

function Inline({ text }: { text: string }) {
  return <>{text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part.startsWith('*') ? <em key={i}>{part.slice(1, -1)}</em> : part)}</>;
}

export function Markdown({ source }: { source: string }) {
  return <>{parseMarkdown(source).map((block, i) => {
    if (block.type === 'heading') return createElement(`h${block.level}`, { key: i }, <Inline text={block.text} />);
    if (block.type === 'list') return <ul key={i}>{block.items.map((text, j) => <li key={j}><Inline text={text} /></li>)}</ul>;
    if (block.type === 'quote') return <blockquote key={i}><Inline text={block.text} /></blockquote>;
    return <p key={i}><Inline text={block.text} /></p>;
  })}</>;
}
