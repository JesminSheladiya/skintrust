// ─────────────────────────────────────────────────────────────
// Single source of truth for the live domain + base path.
//
// The origin (SITE) is read at build time from `astro.config.mjs`
// (the `site` option), so to change the live domain later you only
// need to edit `astro.config.mjs`, then rebuild.
// BASE is the sub-path the site is served under (e.g. `/skintrust`),
// set via the `base` option in astro.config.mjs.
// ─────────────────────────────────────────────────────────────

export const SITE = import.meta.env.SITE.replace(/\/+$/, "");        // e.g. "https://click4demos.co.in"
export const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");    // e.g. "/skintrust"  ("" if served at root)
export const SITE_BASE = SITE + BASE;                                // e.g. "https://click4demos.co.in/skintrust"
