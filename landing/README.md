# Conclave — Landing

Minimal Next.js landing scaffold for Conclave (community platform).

Quickstart
- Requirements: Node.js 18+ (LTS)
- From repo root or the landing folder:
  cd landing
  npm install
  npm run dev

Build & Production
  npm run build
  npm start

Deploy
- Recommended: Connect this repository to Vercel and set the project root to the `landing/` folder (fastest, provides preview URLs). On Vercel: Create Project → Import Git Repository → set Root Directory to `landing`. Vercel will detect Next.js and run the build.
- A `vercel.json` file is included in `landing/` for optional customizations.
- Manual: build locally with `npm run build` and deploy the output on any Node host that supports Next.js.

Customizing
- Colors and tokens: `landing/styles/globals.css` (CSS variables at :root)
- Logo: `landing/public/logo.svg`
- Pages: `landing/pages` (index.js is the landing page)

Notes
- This is a minimal scaffold meant for iteration. Ask to add a waitlist form, analytics, or CI/CD next.
