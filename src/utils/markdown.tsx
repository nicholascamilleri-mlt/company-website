import type { ReactNode } from 'react';

const renderInline = (text: string): ReactNode[] => {
  const parts: ReactNode[] = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;

  const pushTextWithBold = (segment: string) => {
    const boldRegex = /\*\*([^*]+)\*\*/g;
    let boldIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = boldRegex.exec(segment)) !== null) {
      if (match.index > boldIndex) {
        parts.push(segment.slice(boldIndex, match.index));
      }
      parts.push(<strong key={`bold-${parts.length}`}>{match[1]}</strong>);
      boldIndex = match.index + match[0].length;
    }

    if (boldIndex < segment.length) {
      parts.push(segment.slice(boldIndex));
    }
  };

  let match: RegExpExecArray | null;
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      pushTextWithBold(text.slice(lastIndex, match.index));
    }

    parts.push(
      <a key={`link-${parts.length}`} href={match[2]} target="_blank" rel="noreferrer">
        {match[1]}
      </a>
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    pushTextWithBold(text.slice(lastIndex));
  }

  return parts;
};

export const renderMarkdown = (content: string): ReactNode[] => {
  const lines = content.split(/\r?\n/);
  const nodes: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      nodes.push(
        <ul key={`list-${nodes.length}`}>
          {listItems.map((item, index) => (
            <li key={`${item}-${index}`}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      return;
    }

    if (trimmed.startsWith('### ')) {
      flushList();
      nodes.push(<h3 key={`h3-${nodes.length}`}>{renderInline(trimmed.slice(4))}</h3>);
      return;
    }

    if (trimmed.startsWith('## ')) {
      flushList();
      nodes.push(<h2 key={`h2-${nodes.length}`}>{renderInline(trimmed.slice(3))}</h2>);
      return;
    }

    if (trimmed.startsWith('- ')) {
      listItems.push(trimmed.slice(2));
      return;
    }

    flushList();
    nodes.push(<p key={`p-${nodes.length}`}>{renderInline(trimmed)}</p>);
  });

  flushList();
  return nodes;
};
