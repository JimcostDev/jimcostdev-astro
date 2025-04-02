import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [],
  output: 'server',
  adapter: vercel(),
});




