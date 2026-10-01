import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LandingCabin } from './pages/LandingCabin';
import { BookOverview } from './pages/BookOverview';
import { AboutPage } from './pages/AboutPage';
import { NotFound } from './components/NotFound';
import { BookTransitionProvider } from './components/BookTransition';
const CreatureBook = lazy(() => import('./creature-book/CreatureBook').then(module => ({ default: module.CreatureBook })));
const reader = <Suspense fallback={<main id="main" tabIndex={-1} aria-busy="true" style={{ padding: '10vh 8%' }}>Het veldverslag gaat open…</main>}><CreatureBook /></Suspense>;

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <BookTransitionProvider>
      <a href="#main" className="skip-link" onClick={(event) => {
        event.preventDefault();
        const main = document.getElementById('main');
        main?.focus();
        main?.scrollIntoView();
      }}>Ga naar de inhoud</a>
      <Routes>
        <Route path="/" element={<LandingCabin />} />
        <Route path="/boeken/:category" element={<BookOverview />} />
        <Route path="/wezens/:slug" element={reader} />
        <Route path="/creatures/:id" element={reader} />
        <Route path="/creatures/:id/:chapter" element={reader} />
        <Route path="/over" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BookTransitionProvider>
  );
}
