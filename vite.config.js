import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'codeclan.github.io',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
