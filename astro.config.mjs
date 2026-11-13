// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL pública: canonical, Open Graph y datos del evento apuntan acá
  site: 'https://plotcenter.com.ar/',
  vite: {
    plugins: [tailwindcss()]
  }
});
