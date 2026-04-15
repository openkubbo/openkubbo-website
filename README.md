# OpenKubbo Website

Marketing website for OpenKubbo, an open source desktop app for managing GitHub repositories, pull requests, issues, CI/CD, releases, and local workflows.

This repository contains the public product landing page, including:

- home page with hero, features, FAQ, and download CTA
- documentation page at `/docs`
- roadmap page at `/roadmap`
- Portuguese and English language support
- client-side GitHub API integration to display the star count from the main repository

## Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI / shadcn-style components
- Vercel Analytics

## Running locally

Prerequisites:

- Node.js in a recent LTS version

Install and run with `npm`:

```bash
npm install
npm run dev
```

Alternative with `pnpm`:

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev`: starts the development server
- `npm run build`: creates the production build
- `npm run start`: serves the production build locally
- `npm run lint`: runs the project linter

## Main structure

- `app/`: application routes and layout
- `components/`: landing page sections and reusable UI components
- `lib/`: internationalization, language context, and utilities
- `public/`: icons, images, and public artifacts such as `OpenKubbo.zip`

## Internationalization

The site supports two languages, `pt` and `en`, with the dictionary centralized in `lib/i18n.ts`.

## Environment variables

In the current state of the project, there are no required environment variables referenced in the code.

## Related project

Main product repository:

- [openkubbo/openkubbo](https://github.com/openkubbo/openkubbo)

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
