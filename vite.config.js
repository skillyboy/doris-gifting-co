import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// React + ReactDOM are externalized to esm.sh via the importmap in
// index.html. Keeps the app bundle small enough that the GitHub MCP
// can push it as plain text content (the local git proxy returns 403
// on push, so we round-trip via the API).
export default defineConfig({
  plugins: [react()],
  base: '/doris-gifting-co/',
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-dom/client'],
    },
  },
});
