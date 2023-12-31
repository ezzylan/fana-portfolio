# fana-portfolio

**fana-portfolio** is a Personal Portfolio Website made for [Farhanah Izzati](https://github.com/farhanahizzati) using the [Astrofy](https://astro.build/themes/details/astrofy/) template by [Manuel Ernesto](https://github.com/manuelernestog).

## Installation

```bash
git clone https://github.com/ezzylan/fana-portfolio.git
cd fana-portfolio
pnpm install
pnpm run dev
```

## Tech Stack

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)
- [Decap CMS](https://decapcms.org/)

## Project Structure

> Refer to this [README file](https://github.com/manuelernestog/astrofy/blob/main/README.md) for more information on the project structure.

## Usage

### Add Projects (Portfolio)

> As of the time of this writing, Astro currently **does not support** empty collections. So, make sure to **not leave** the portfolio collection (or any other collections if added in the future) **empty**.

There are two ways to add projects to the portfolio section:

- Manually

  1. Open `src/content/portfolio`.
  2. Create a new Markdown file inside the folder. Make sure to include the following metadata in the **front matter**:
     - title (Project Title)
     - description (Project Description)
     - heroImage (Project Image)
     - pubDate (Publication Date)

- Via Decap CMS

  1. Open `https://<site-name>.netlify.app/admin/`.
  2. Click the following buttons according to their appearance order:
     - `Login with Netlify Identity`
     - `Continue with GitHub`
     - `New Projects`
  3. Fill in all the information in the empty spaces.
  4. Click `Publish` then `Publish Now`.

  > The steps above are done based on the assumption that the website has been **deployed to Netlify**. Refer to [this guide](https://decapcms.org/docs/add-to-your-site/) to configure Decap CMS to your preferred backend.

## Acknoledgements

- [Astrofy | Personal Porfolio Website Template](https://astro.build/themes/details/astrofy/) by [Manuel Ernesto](https://github.com/manuelernestog)
