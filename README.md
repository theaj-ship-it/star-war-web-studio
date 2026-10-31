# Star War Web Studio

A dark, cinematic, responsive portfolio and freelance website built with React, Vite and Tailwind CSS v4.

## Included
- Responsive one-page portfolio
- Projects section featuring cH Code Helper
- Services, about and contact sections
- Mobile navigation
- GitHub Pages deployment workflow
- Reduced-motion-aware CSS animation

## Run locally
Requires Node.js 22 or newer.
```bash
npm install
npm run dev
```

## Build check
```bash
npm run build
npm run preview
```

## Configure before publishing
Review `src/siteConfig.js`. Add a public contact email only if you want it displayed. The contact action currently links to the GitHub profile.

The project cards distinguish a live project from concepts and learning projects. Keep those status labels accurate.

## GitHub Pages
The repository is configured for GitHub Actions deployment. In the repository, open Settings → Pages and set Source to GitHub Actions. The workflow builds the site and deploys the `dist` folder after a push to `main`.

Expected URL: https://theaj-ship-it.github.io/star-war-web-studio/

The Vite base path is configured for this exact repository name. If you rename the repository, update `vite.config.js`.

## Safety notes
GitHub Pages hosts static frontend files. Never put API keys, passwords, private tokens or server-side secrets in this repository. Domain registration and paid services are not included.