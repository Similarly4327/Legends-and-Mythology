import type { SVGProps } from 'react';

type IconName = 'compass' | 'arrow-right' | 'arrow-left' | 'book' | 'search' | 'close' | 'chevron-down' | 'shield' | 'map' | 'feather' | 'moon' | 'text' | 'check';

const paths: Record<IconName, React.ReactNode> = {
  compass: <><circle cx="12" cy="12" r="9" /><path d="m12 3 3 6 6 3-6 3-3 6-3-6-6-3 6-3Z" /><circle cx="12" cy="12" r="1" /></>,
  'arrow-right': <><path d="M4 12h16m-6-6 6 6-6 6" /></>,
  'arrow-left': <><path d="M20 12H4m6-6-6 6 6 6" /></>,
  book: <><path d="M12 5v15M3 4c4-1 6 0 9 2 3-2 5-3 9-2v15c-4-1-6 0-9 2-3-2-5-3-9-2Z" /></>,
  search: <><circle cx="10" cy="10" r="6" /><path d="m15 15 5 5" /></>,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  'chevron-down': <path d="m6 9 6 6 6-6" />,
  shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z" /><path d="M12 8v5m0 3v.1" /></>,
  map: <><path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2Zm6-2v16m6-14v16" /></>,
  feather: <><path d="M4 20 15 9M7 17c-4-3-2-8 3-12 5-4 10-2 10-2s2 5-2 10c-4 5-9 7-11 4Z" /><path d="M11 13h6" /></>,
  moon: <path d="M20 14a9 9 0 1 1-10-11A7 7 0 0 0 20 14Z" />,
  text: <><path d="M4 5h12M10 5v14M6 19h8m1-7h7m-3.5 0v7m-2 0h4" /></>,
  check: <path d="m5 12 4 4 10-10" />,
};

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
