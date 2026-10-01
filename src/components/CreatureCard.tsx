import { Link } from 'react-router-dom';
import type { Creature } from '../content/types';
import { Artwork } from './Artwork';
import { Icon } from './Icon';
import common from './Common.module.css';
import styles from './CreatureCard.module.css';

export function CreatureCard({ creature, index, compact = false }: { creature: Creature; index: number; compact?: boolean }) {
  const available = creature.status === 'available';
  return <article className={styles.card} data-compact={compact}>
    <div className={styles.art}><Artwork artwork={creature.artwork} /><span className={styles.plate}>PLAAT {String(index + 1).padStart(2, '0')}</span></div>
    <div className={styles.copy}>
      <span className={common.eyebrow}>{creature.region} <span aria-hidden="true">·</span> {creature.tradition}</span>
      <h2>{creature.name}</h2>
      {creature.alternativeName && <p className={styles.alternative}>{creature.alternativeName}</p>}
      <p className={styles.summary}>{creature.summary}</p>
      <div className={styles.meta}><span>{creature.age} · samen lezen</span><span>{creature.readingMinutes} min. leestijd</span></div>
      {available ? <Link to={`/wezens/${creature.slug}`} className={common.button}>Begin het veldverslag <Icon name="arrow-right" /></Link> : <span className={styles.status}>{creature.status === 'locked' ? 'Dit veldverslag is nog gesloten' : 'Een nieuw veldverslag is onderweg'}</span>}
    </div>
  </article>;
}
