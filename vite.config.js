import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [sveltekit()],
  css: {
    postcss: './postcss.config.cjs', // Si tienes una configuración personalizada de PostCSS
  }
});
