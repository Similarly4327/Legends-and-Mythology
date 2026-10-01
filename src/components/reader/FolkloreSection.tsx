import type { Creature } from '../../content/types';
import { Icon } from '../Icon';
import common from '../Common.module.css';
import styles from './Reader.module.css';

export function FolkloreSection({ creature }: { creature: Creature }) {
  return <section className={styles.sources} aria-labelledby="sources-title">
    <div className={styles.sourcesIntro}><Icon name="feather" /><span className={common.eyebrow}>In de kantlijn</span><h2 id="sources-title">Over dit veldverslag.</h2><p>{creature.editorialNote}</p><span className={styles.editorialAge}>Leeftijd {creature.age} is een redactionele indicatie. Jij kent je kind het best.</span></div>
    <div className={styles.sourceNotes}><h3>Bronnen & leesnotities</h3>{creature.sources.map((source) => <div key={source.title}>{source.url ? <a href={source.url} target="_blank" rel="noreferrer">{source.title}<Icon name="arrow-right" /><span className="sr-only"> (opent in een nieuw tabblad)</span></a> : <strong>{source.title}</strong>}<p>{source.note}</p></div>)}</div>
  </section>;
}
