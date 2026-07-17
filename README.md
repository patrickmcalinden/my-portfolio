# patrickmcalinden.com

Personal portfolio site for Patrick McAlinden — data & product analyst.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Development

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
```

## Content

All resume content (experience, skills, projects, contact links) lives in
[`src/data/resume.ts`](src/data/resume.ts) — edit that file to update the site.

## Deployment

Pushes to `main` trigger the GitHub Pages workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
