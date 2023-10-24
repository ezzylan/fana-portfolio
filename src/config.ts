// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Farhanah Izzati";
export const SITE_DESCRIPTION = "Welcome to my portfolio website!";

export type Portfolio = {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    heroImage: string;
    title: string;
    description: string;
    pubDate: Date;
    tools: string[];
  };
};
