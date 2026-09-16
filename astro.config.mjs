import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// TODO: replace with the real production URL before deploying.
export default defineConfig({
  site: 'https://example.com',
  integrations: [tailwind({ applyBaseStyles: false })],
});
