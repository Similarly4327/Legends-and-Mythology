import type { Book } from '../content/types';

/** Foil-stamped vector emblems; illustration assets remain independently replaceable. */
export function BookEmblem({ kind }: { kind: Book['emblem'] }) {
  return (
    <svg viewBox="0 0 160 130" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === 'pegasus' && <>
        <path d="M54 79c-16-5-21-17-28-21 7 1 12 4 15 10-8-15-10-30-18-39 21 3 38 21 41 38-3-24 0-41-6-53 25 13 32 42 23 60" />
        <path d="M29 35 54 64M29 44 56 70M32 52l27 21M63 24l10 44M67 38l7 34M70 52l4 22" />
        <path d="M79 77c7-12 15-21 23-21 1-11 3-21 9-29l3 11 11 6 5 11-8 4-6-3-5 18-5 10-1 13-4 16-6 1 3-18-5-4-16 1-4 9 8 8-5 5-14-11 1-19c-2-4-5-6-9-6-7 0-13 5-17 7" />
        <path d="M109 35c-10 1-15 11-19 22m-26 29c-7-5-14-4-19 1-8 8-17 6-23 1m55 7 5 17-6 3-10-18" /><circle cx="120" cy="47" r="1" />
        <path d="M24 119h105m-78 4h52" opacity=".55" />
      </>}
      {kind === 'dragon' && <>
        <path d="M78 74c-4-19-27-36-53-39l14 17-7 13 17-2 7 17 14-4m12-4c1-17 16-43 37-50l-7 24 13 11-21 3-1 18-13-7" />
        <path d="m35 41 37 30m-33-19 33 20m-23-9 22 9m44-40L88 67m24-21L90 68m14-8-12 11" />
        <path d="M86 78c19-16 12-29 16-40l9 2 4-9 3 11 10 3 5 8-14 7-6-2c-4 14 6 23-5 36l-8 8 10 9-10 3-13-9-11-2-9 12H54l13-21-6-13c-9 10-7 27-24 29-16 1-16-16-4-20-6 8-1 13 5 8 9-9 7-26 20-30 11-5 18 5 28 5Z" />
        <path d="m102 36-6-7m5 18-7-3m19 21 7 7m-10 2 8 7m-13 1 6 7m-25 10-5 6" /><circle cx="120" cy="47" r="1" />
        <path d="M24 120h109m-83 4h52" opacity=".55" />
      </>}
      {kind === 'moon' && <>
        <path d="M95 24a39 39 0 1 0 15 73A34 34 0 0 1 95 24Z" />
        <path d="m47 103 9-24 10 7 11-22 11 15 9-5 16 32m-66 0h73M80 56V42m-5 7h10m34-8V31m-5 5h10m-66-2V24m-4 5h8" />
        <path d="M38 110h87m-68 6h48" opacity=".55" /><circle cx="116" cy="63" r="1.5" /><circle cx="64" cy="48" r="1" />
      </>}
    </svg>
  );
}
