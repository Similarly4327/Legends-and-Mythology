import type { Creature, VisualState } from '../../content/types';
import { Artwork } from '../Artwork';
import { MapStage } from './MapStage';
import styles from './Story.module.css';

export function IllustrationStage({ creature, state, priority = false }: { creature: Creature; state: VisualState; priority?: boolean }) {
  return <figure className={styles.stage} data-kind={state.kind} data-treatment={state.treatment ?? 'natural'}>
    <div className={styles.stageImage}>
      {state.kind === 'map' && state.location ? <MapStage location={state.location} /> : <>
        <Artwork artwork={state.artwork ?? creature.artwork} priority={priority} className={styles.illustration} />
        {state.kind === 'anatomy' && <div className={styles.anatomyGrid} aria-hidden="true" />}
        {state.annotations?.map((annotation) => <span key={annotation.label} className={styles.annotation} style={{ left: `${annotation.x}%`, top: `${annotation.y}%` }}><i aria-hidden="true" />{annotation.label}</span>)}
      </>}
      <span className={styles.stageMark} aria-hidden="true">L & M <span>✧</span></span>
    </div>
    <figcaption><span>{state.caption}</span><span aria-hidden="true">✧</span></figcaption>
  </figure>;
}
