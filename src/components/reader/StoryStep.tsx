import type { Chapter, Creature, StoryStep as StepData, VisualState } from '../../content/types';
import { IllustrationStage } from './IllustrationStage';
import { FactPanel } from './FactPanel';
import { Icon } from '../Icon';
import common from '../Common.module.css';
import styles from './Story.module.css';

export function StoryStep({ creature, chapter, step, visual, index, active, priority }: { creature: Creature; chapter: Chapter; step: StepData; visual: VisualState; index: number; active: boolean; priority: boolean }) {
  return <article className={styles.step} data-story-step={index} data-active={active} id={`${chapter.id}-${step.id}`} aria-labelledby={`${chapter.id}-${step.id}-title`}>
    <div className={styles.mobileVisual}><IllustrationStage creature={creature} state={visual} priority={priority} /></div>
    <div className={styles.stepCopy}>
      <span className={common.eyebrow}>{step.eyebrow ?? chapter.title}</span>
      <h3 id={`${chapter.id}-${step.id}-title`}>{step.title}</h3>
      <div className={styles.paragraphs} data-story={chapter.kind === 'story'}>{step.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      {step.facts && <FactPanel facts={step.facts} />}
      {step.note && <aside className={styles.note}><Icon name="feather" /><p>{step.note}</p></aside>}
    </div>
  </article>;
}
