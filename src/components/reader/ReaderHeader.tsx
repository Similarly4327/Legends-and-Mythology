import { Link } from 'react-router-dom';
import type { Creature } from '../../content/types';
import { getCreatureNeighbors } from '../../content/repository';
import { Icon } from '../Icon';
import styles from './Reader.module.css';

export function ReaderHeader({ creature, activeChapter, largeText, onTextSize, onChapterSelect }: { creature: Creature; activeChapter: string; largeText: boolean; onTextSize: () => void; onChapterSelect: (chapterId: string) => void }) {
  const { previous, next } = getCreatureNeighbors(creature.slug);
  return <header className={styles.header}>
    <div className={styles.headerTop}>
      <Link to={`/boeken/${creature.category}`} className={styles.contentsLink}><Icon name="book" /><span>Inhoudsopgave</span></Link>
      <Link to="/" className={styles.readerBrand} aria-label="Legends & Mythology, naar de studeerkamer"><Icon name="compass" /><span>LEGENDS & MYTHOLOGY</span></Link>
      <div className={styles.headerControls}>
        <button onClick={onTextSize} aria-label={largeText ? 'Standaard tekstgrootte' : 'Grotere tekst'} aria-pressed={largeText}><Icon name="text" /></button>
        {previous ? <Link to={`/wezens/${previous.slug}`} aria-label={`Vorig wezen: ${previous.name}`}><Icon name="arrow-left" /></Link> : <span className={styles.disabled} aria-hidden="true"><Icon name="arrow-left" /></span>}
        {next ? <Link to={`/wezens/${next.slug}`} aria-label={`Volgend wezen: ${next.name}`}><Icon name="arrow-right" /></Link> : <span className={styles.disabled} aria-hidden="true"><Icon name="arrow-right" /></span>}
      </div>
    </div>
    <nav className={styles.chapterNav} aria-label="Hoofdstukken">
      <span className={styles.creatureLabel}>{creature.name}</span>
      <div>{creature.chapters.map((chapter, index) => <button key={chapter.id} aria-current={activeChapter === chapter.id ? 'step' : undefined} onClick={() => onChapterSelect(chapter.id)}><span>{String(index + 1).padStart(2, '0')}</span>{chapter.kind === 'discovery' ? 'Ontmoeting' : chapter.kind === 'field-notes' ? 'Veldnotities' : chapter.kind === 'story' ? 'Verhaal' : 'Betekenis'}</button>)}</div>
    </nav>
  </header>;
}
