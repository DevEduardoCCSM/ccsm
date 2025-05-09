import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // Si tienes rutas dinámicas, usa fallback como 'index.html'
      fallback: 'index.html', // Esto hace que la app funcione como SPA
    }),
  },
};

export default config;
