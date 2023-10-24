import { defineCollection, z } from "astro:content";

const portfolioSchema = ({ image }) =>
  z.object({
    title: z.string(),
    description: z.string(),
    heroImage: image(),
    pubDate: z.coerce.date(),
    tools: z.array(z.string()),
  });

export const collections = {
  portfolio: defineCollection({ type: "content", schema: portfolioSchema }),
};
