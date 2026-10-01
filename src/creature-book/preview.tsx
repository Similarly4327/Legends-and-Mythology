import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import '@fontsource/cormorant-garamond/latin-400.css';
import '@fontsource/cormorant-garamond/latin-500.css';
import '@fontsource/cormorant-garamond/latin-400-italic.css';
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-500.css';
import App from '../App';
import '../styles/global.css';
// The old preview URL now uses the same application and book state as production.
createRoot(document.getElementById('root')!).render(<StrictMode><HashRouter><App /></HashRouter></StrictMode>);
