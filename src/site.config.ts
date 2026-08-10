/**
 * Single source of truth for identity, deploy URL, and contact links.
 * astro.config.ts reads `SITE.url` from here, so change it in one place.
 */

export const SITE = {
	/**
	 * Absolute origin the site is served from. Used for canonical URLs and
	 * Open Graph tags. For a GitHub Pages *user site* this is
	 * `https://<username>.github.io` and `base` stays "/".
	 */
	url: 'https://emiliourbinaar.github.io',
	name: 'Emilio Urbina Arredondo',
	tagline: 'Data Science & Mathematics student, headed toward computational biology.',
	location: 'Monterrey, Mexico',
	description:
		'Emilio Urbina Arredondo — Data Science and Mathematics student at Tecnológico de Monterrey, ' +
		'working toward a research career in computational biology. Projects in modeling, optimization, ' +
		'reinforcement learning, and statistical inference.',
	copyrightYear: 2026,
} as const;

/**
 * Contact links rendered in the footer. Set `linkedin` or `github` to `null`
 * to omit that link entirely rather than shipping a placeholder URL.
 */
export const CONTACT: {
	email: string;
	linkedin: string | null;
	github: string | null;
} = {
	email: 'emilio.urbinaar@gmail.com',
	linkedin: 'https://www.linkedin.com/in/emilio-urbina-arredondo/',
	github: 'https://github.com/emiliourbinaar',
};

/** Path to the CV, relative to the site base. Lives in `public/`. */
export const CV_PATH = 'Main_CV.pdf';
