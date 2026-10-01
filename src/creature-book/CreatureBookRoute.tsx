import type { ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { creatures } from '../creatures';
import { CreatureBook } from './CreatureBook';

// Preserve the foundation reader for creatures that haven't moved to folders yet.
export function CreatureBookRoute({ fallback }: { fallback: ReactNode }) {
  const { slug } = useParams();
  return creatures.some(creature => creature.id === slug) ? <CreatureBook /> : fallback;
}
