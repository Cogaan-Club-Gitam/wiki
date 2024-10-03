// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site:'https://cogaan-club-gitam.github.io',
  base:'wiki',
  integrations: [
    starlight({
      title: "Cogaan Club Wiki",
      social: {
        github: "https://github.com/Cogaan-Club-Gitam",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
