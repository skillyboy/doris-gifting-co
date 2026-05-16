import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base` differs per deploy target:
//  - GitHub Pages serves under /doris-gifting-co/ (set DEPLOY_TARGET=gh-pages,
//    done by `npm run build:docs`)
//  - Railway / `npm run dev` serve at the domain root, so base is '/'
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

// React + ReactDOM are externalized to esm.sh via the importmap in
// index.html. Keeps the app bundle small enough that the GitHub MCP
// can push it as plain text content (the local git proxy returns 403
// on push, so we round-trip via the API).
export default defineConfig({
  plugins: [react()],
  base: ghPages ? '/doris-gifting-co/' : '/',
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-dom/client'],
    },
  },
  preview: {
    host: true,
    port: Number(process.env.PORT) || 4173,
    // Railway assigns a *.up.railway.app host (and any custom domain);
    // allow them so `vite preview` doesn't reject the request.
    allowedHosts: true,
  },
});
