import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import '@fontsource/cormorant-garamond/latin-400.css';
import '@fontsource/cormorant-garamond/latin-500.css';
import '@fontsource/cormorant-garamond/latin-400-italic.css';
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-500.css';
import { creatures } from '../creatures';
import { CreatureBook } from './CreatureBook';

// Isolated preview while other chats work on the website foundation.
createRoot(document.getElementById('root')!).render(<StrictMode><HashRouter><a href="#main" className="preview-skip" onClick={event => { event.preventDefault(); document.getElementById('main')?.focus(); }}>Ga naar de inhoud</a><Routes><Route path="/creatures/:id" element={<CreatureBook />} /><Route path="/creatures/:id/:chapter" element={<CreatureBook />} /><Route path="*" element={<Navigate to={`/creatures/${creatures[0]?.id ?? 'unknown'}`} replace />} /></Routes></HashRouter></StrictMode>);
