import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://dimgerogiannis.github.io',
  // Tailwind/daisyUI styles are imported only by BaseLayout (the legacy template
  // pages), so they don't leak into the custom Home / Publications / CV design.
  integrations: [mdx(), tailwind({ applyBaseStyles: false })]
});
