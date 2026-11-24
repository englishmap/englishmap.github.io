// @ts-check
import { defineConfig } from 'astro/config';

// In CI, actions/configure-pages supplies both: the Pages origin and, for a project site
// (https://<user>.github.io/<repo>/), the "/<repo>" base path. Locally the site runs at the root.
export default defineConfig({
  site: process.env.SITE_URL ?? 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
