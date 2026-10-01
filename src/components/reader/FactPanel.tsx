import type { StoryStep } from '../../content/types';
import styles from './Story.module.css';

export function FactPanel({ facts }: { facts: NonNullable<StoryStep['facts']> }) {
  return <dl className={styles.facts}>{facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>;
}
