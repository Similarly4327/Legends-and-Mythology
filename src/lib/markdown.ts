export type MarkdownBlock = { type: 'heading'; level: number; text: string } | { type: 'paragraph' | 'quote'; text: string } | { type: 'list'; items: string[] };

// Deliberately small, safe Markdown subset; raw HTML is never interpreted.
export function parseMarkdown(source: string): MarkdownBlock[] {
  const blocks: MarkdownBlock[] = [];
  for (const chunk of source.replace(/\r\n?/g, '\n').trim().split(/\n\s*\n/)) {
    if (!chunk.trim()) continue;
    const lines = chunk.trim().split('\n');
    let paragraph: string[] = [];
    const flush = () => { if (paragraph.length) { blocks.push({ type: 'paragraph', text: paragraph.join(' ') }); paragraph = []; } };
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const heading = /^(#{1,6})\s+(.+)$/.exec(line);
      if (heading) { flush(); blocks.push({ type: 'heading', level: heading[1].length, text: heading[2] }); }
      else if (/^[-*]\s/.test(line)) {
        flush(); const items = [line.replace(/^[-*]\s+/, '')];
        while (i + 1 < lines.length && /^[-*]\s/.test(lines[i + 1])) items.push(lines[++i].replace(/^[-*]\s+/, ''));
        blocks.push({ type: 'list', items });
      } else if (/^>\s?/.test(line)) { flush(); blocks.push({ type: 'quote', text: line.replace(/^>\s?/, '') }); }
      else paragraph.push(line.trim());
    }
    flush();
  }
  return blocks;
}
