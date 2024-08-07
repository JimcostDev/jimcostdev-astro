import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid', // or 'server'
  adapter: vercel(),
  experimental: {
    serverIslands: true,
  },
});

import { defineConfig } from 'astro/config';


