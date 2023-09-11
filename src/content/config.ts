import { defineCollection, z } from "astro:content";

const portfolioSchema = ({ image }) =>
	z.object({
		title: z.string(),
		description: z.string(),
		heroImage: image(),
		pubDate: z.coerce.date(),
	});

const portfolioCollection = defineCollection({ schema: portfolioSchema });

export const collections = {
	portfolio: portfolioCollection,
};
