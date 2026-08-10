import { defineConfig, fontProviders } from 'astro/config';
import { SITE } from './src/site.config';

// https://astro.build/config
export default defineConfig({
	site: SITE.url,
	// GitHub Pages *user site* (<username>.github.io) is served from the root.
	// For a project repo this would be '/<repo-name>/'.
	base: '/',
	trailingSlash: 'ignore',
	build: {
		// Emit /index.html rather than nested directories where possible.
		format: 'directory',
	},
	// Fonts are downloaded and self-hosted at build time — no runtime request to
	// Google, no flash of unstyled text. Families match design_brief.md.
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Fraunces',
			cssVariable: '--font-fraunces',
			weights: [300, 400, 500, 600],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['Georgia', 'serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'IBM Plex Sans',
			cssVariable: '--font-plex-sans',
			weights: [300, 400, 500],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'IBM Plex Mono',
			cssVariable: '--font-plex-mono',
			weights: [400, 500],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['ui-monospace', 'monospace'],
		},
	],
});
