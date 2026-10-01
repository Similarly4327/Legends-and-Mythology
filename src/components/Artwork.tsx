import { useState } from 'react';
import type { Artwork as ArtworkData } from '../content/types';
import { assetUrl } from '../lib/assets';
import { Icon } from './Icon';
import styles from './Common.module.css';

export function Artwork({ artwork, className, priority = false }: { artwork?: ArtworkData; className?: string; priority?: boolean }) {
  const [failedSrc, setFailedSrc] = useState<string>();
  if (!artwork || failedSrc === artwork.src) {
    return <div className={`${styles.artFallback} ${className ?? ''}`} role="img" aria-label="Illustratie wordt nog aan dit veldverslag toegevoegd"><Icon name="feather" /><span>Een plaat in voorbereiding</span></div>;
  }
  return <img className={className} src={assetUrl(artwork.src)} alt={artwork.alt} width={artwork.width} height={artwork.height} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" onError={() => setFailedSrc(artwork.src)} />;
}
