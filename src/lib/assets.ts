export function assetUrl(path: string): string {
  // Folder-creature assets are bundled URLs rather than public-relative paths.
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}
