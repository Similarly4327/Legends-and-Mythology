import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LandingCabin } from './pages/LandingCabin';
import { BookOverview } from './pages/BookOverview';
import { CreatureReader } from './pages/CreatureReader';
import { AboutPage } from './pages/AboutPage';
import { NotFound } from './components/NotFound';
import { CreatureBook } from './creature-book/CreatureBook';
import { CreatureBookRoute } from './creature-book/CreatureBookRoute';

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      <a href="#main" className="skip-link" onClick={(event) => {
        event.preventDefault();
        const main = document.getElementById('main');
        main?.focus();
        main?.scrollIntoView();
      }}>Ga naar de inhoud</a>
      <Routes>
        <Route path="/" element={<LandingCabin />} />
        <Route path="/boeken/:category" element={<BookOverview />} />
        <Route path="/wezens/:slug" element={<CreatureBookRoute fallback={<CreatureReader />} />} />
        <Route path="/creatures/:id" element={<CreatureBook />} />
        <Route path="/creatures/:id/:chapter" element={<CreatureBook />} />
        <Route path="/over" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
