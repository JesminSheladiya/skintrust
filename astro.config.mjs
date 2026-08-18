import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Serve everything at the root in dev so localhost:4322/ just works.
// In production the site is hosted under the /skintrust/ sub-path
// (https://click4demos.co.in/skintrust).
// To change the live domain later, only edit `site` below, then rebuild.
export default defineConfig({
  site: 'https://click4demos.co.in',
  base: process.argv[2] === 'dev' ? '/' : '/skintrust/',
  integrations: [react(), sitemap()],
});