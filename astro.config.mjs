// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	// IMPORTANT: set this to your real live domain (with https)
	site: "https://acrepairhuntersvillenc.com/",
	integrations: [
		mdx(),
		sitemap({
			// Filter out redirects / low-value URLs
			filter: (page) =>
				!page.includes("/about") && // about redirects to service-areas
				!page.includes("/rss.xml"),
			changefreq: "weekly",
			priority: 0.7,
			lastmod: new Date(),
			serialize(item) {
				if (item.url.endsWith("/") || item.url.match(/\.com\/?$/)) {
					item.priority = 1.0;
					item.changefreq = "daily";
				} else if (item.url.includes("/services/")) {
					item.priority = 0.9;
					item.changefreq = "weekly";
				} else if (item.url.includes("/contact") || item.url.includes("/service-areas")) {
					item.priority = 0.8;
					item.changefreq = "monthly";
				} else if (item.url.includes("/blog")) {
					item.priority = 0.6;
					item.changefreq = "weekly";
				}
				return item;
			},
		}),
	],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
