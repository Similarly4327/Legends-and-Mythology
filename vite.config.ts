import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative built assets work both on a Pages project subpath and a custom domain.
  // HashRouter keeps all reader paths on the same static index.html request.
  base: './',
});
