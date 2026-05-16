import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  preview: {
    host: true,
    port: Number(process.env.PORT) || 4173,
    allowedHosts: ['www.dorisgiftingco.com', 'dorisgiftingco.com', '.up.railway.app'],
  },
});
