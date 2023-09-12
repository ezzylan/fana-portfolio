import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from "astro-netlify-cms";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://farhanah-izzati.netlify.app",
	integrations: [
		mdx(),
		sitemap(),
		tailwind(),
		NetlifyCMS({
			config: {
				backend: {
					name: "git-gateway",
					branch: "master",
				},
				media_folder: "src/assets",
				collections: [
					{
						name: "projects",
						label: "Projects",
						folder: "src/content/portfolio",
						create: true,
						delete: true,
						fields: [
							{
								name: "title",
								widget: "string",
								label: "Project Title",
							},
							{
								name: "description",
								widget: "text",
								label: "Project Description",
							},
							{
								name: "heroImage",
								widget: "image",
								label: "Project Image",
							},
							{
								name: "pubDate",
								widget: "datetime",
								label: "Publication Date",
							},
							{
								name: "body",
								widget: "markdown",
								label: "Project Body",
							},
						],
					},
				],
			},
		}),
	],
});
