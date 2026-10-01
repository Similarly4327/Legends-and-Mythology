import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Category } from '../content/types';
import { books } from '../content/books';
import { BookEmblem } from './BookEmblem';
import './BookTransition.css';
import { BookMotion } from '../hooks/useBookMotion';

export function BookTransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [transition, setTransition] = useState<{ category: Category; direction: 'opening' | 'closing' } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  const move = (category: Category, direction: 'opening' | 'closing') => {
    if (timer.current) return;
    const destination = direction === 'opening' ? `/boeken/${category}` : '/';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { navigate(destination); return; }
    setTransition({ category, direction });
    timer.current = setTimeout(() => { navigate(destination); setTransition(null); timer.current = null; }, 650);
  };
  const book = books.find(item => item.id === transition?.category);
  return <BookMotion.Provider value={move}>{children}{transition && book && <div className="book-transition" data-direction={transition.direction} data-theme={book.id} role="status" aria-live="polite"><div className="transition-volume" aria-hidden="true"><div className="transition-paper" /><div className="transition-cover"><BookEmblem kind={book.emblem} /><span>{book.title}</span></div></div><p>{transition.direction === 'opening' ? 'Het boek gaat open…' : 'Het boek sluit. Terug naar de studeerkamer…'}</p></div>}</BookMotion.Provider>;
}
