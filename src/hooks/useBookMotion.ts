import { createContext, useContext } from 'react';
import type { Category } from '../content/types';
export const BookMotion = createContext<((category: Category, direction: 'opening' | 'closing') => void) | null>(null);
export function useBookMotion() {
  const action = useContext(BookMotion);
  if (!action) throw new Error('BookTransitionProvider ontbreekt');
  return action;
}
