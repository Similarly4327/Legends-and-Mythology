import { useEffect, useRef, useState } from 'react';
import type { Chapter, Creature } from '../../content/types';
import { selectActiveStep } from '../../lib/story';
import { IllustrationStage } from './IllustrationStage';
import { StoryStep } from './StoryStep';
import styles from './Story.module.css';

export function StickyStorySection({ creature, chapter, index, onActivate }: { creature: Creature; chapter: Chapter; index: number; onActivate: (chapterId: string, stepId: string) => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const steps = Array.from(section.querySelectorAll<HTMLElement>('[data-story-step]'));
    let observer: IntersectionObserver | undefined;
    const update = () => {
      const readingLine = window.innerHeight * .36;
      const positions = steps.map((step, stepIndex) => {
        const rect = step.getBoundingClientRect();
        return { index: stepIndex, top: rect.top, bottom: rect.bottom };
      });
      const next = selectActiveStep(positions, readingLine);
      setActiveIndex((current) => current === next ? current : next);
      const rect = section.getBoundingClientRect();
      if (rect.top <= readingLine && rect.bottom > readingLine) onActivate(chapter.id, chapter.steps[next].id);
    };
    const observe = () => {
      observer?.disconnect();
      // Pixel margins avoid the width-relative percentage semantics of rootMargin.
      const top = Math.floor(window.innerHeight * .36);
      const bottom = Math.max(0, window.innerHeight - top - 2);
      observer = new IntersectionObserver(update, { rootMargin: `-${top}px 0px -${bottom}px 0px`, threshold: 0 });
      steps.forEach((step) => observer?.observe(step));
      observer.observe(section);
      update();
    };
    observe();
    window.addEventListener('resize', observe);
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', observe);
    };
  }, [chapter, onActivate]);

  return <section ref={sectionRef} className={styles.chapter} id={chapter.id} aria-labelledby={`${chapter.id}-heading`} data-chapter={chapter.id}>
    <header className={styles.chapterHeading}><span>{String(index + 1).padStart(2, '0')}</span><h2 id={`${chapter.id}-heading`}>{chapter.title}</h2><span aria-hidden="true">✧</span></header>
    <div className={styles.storyGrid}>
      <div className={styles.visualColumn}>
        <div className={styles.stickyCanvas} data-active-step={chapter.steps[activeIndex].id}>
          <div className={styles.visualLayers}>{chapter.states.map((state) => {
            const active = state.id === chapter.steps[activeIndex].visualState;
            return <div key={state.id} className={styles.visualLayer} data-active={active} aria-hidden={!active}><IllustrationStage creature={creature} state={state} priority={index === 0 && state.id === chapter.steps[0].visualState} /></div>;
          })}</div>
          <div className={styles.stepIndicators} aria-hidden="true">{chapter.steps.map((step, stepIndex) => <span key={step.id} data-active={stepIndex === activeIndex} />)}</div>
        </div>
      </div>
      <div className={styles.steps}>{chapter.steps.map((step, stepIndex) => {
        const visual = chapter.states.find((state) => state.id === step.visualState) ?? chapter.states[0];
        return <StoryStep key={step.id} creature={creature} chapter={chapter} step={step} visual={visual} index={stepIndex} active={stepIndex === activeIndex} priority={index === 0 && stepIndex === 0} />;
      })}</div>
    </div>
  </section>;
}
