# NST Studio

Single-page marketing website for NST Studio, a mentor-led software engineering studio based in Bengaluru, India.

The site presents NST Studio's delivery model, capabilities, production work, packages, technical stack, mentors, FAQs, and booking flow. Its primary conversion goal is a 20-minute scoping call. The secondary action is downloading the one-page PDF.

## Features

- Responsive layouts for mobile, tablet, and desktop
- Light and dark themes with saved browser preference
- Newton School's Grauity brand colors and semantic surface tokens
- Sticky desktop navigation and mobile booking bar
- Reusable cards for services, case studies, mentors, packages, metrics, and FAQs
- Accessible headings, controls, focus states, and image descriptions
- Reduced-motion support
- Line-based architecture illustration and labelled screenshot placeholders
- Downloadable NST Studio one-page PDF
- Centralized content for copy updates

## Technology

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS and PostCSS
- Plain CSS for the project-specific visual system and responsive layouts
- ReportLab for generating the downloadable PDF

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates an optimized production build using Next.js and webpack.

```bash
npm start
```

Runs the production build locally.

```bash
npm run lint
```

Runs TypeScript validation without emitting files.

## Project structure

```text
app/
  globals.css          Global tokens, themes, components, and responsive styles
  layout.tsx           Root layout and page metadata
  page.tsx             Home page route
components/
  studio-page.tsx      Page sections and reusable UI components
content/
  site.ts              Editable site copy and structured content
public/
  nst-studio-one-pager.pdf
scripts/
  build_one_pager.py   PDF source and generation script
```

## Editing content

Most marketing copy and structured content lives in [`content/site.ts`](content/site.ts). Update this file to change:

- Proof metrics
- Services
- Case studies
- Delivery steps
- Mentor profiles
- Packages and pricing
- Technology stack
- FAQs

Layout and interactive behavior live in [`components/studio-page.tsx`](components/studio-page.tsx). Theme variables and responsive styles live in [`app/globals.css`](app/globals.css).

## Design system

The interface follows Newton School's [Grauity design system](https://grauity.newtonschool.co/):

- Brand blue `#0673F9` for primary actions and links
- Mona Sans as the preferred sans-serif typeface with system fallbacks
- Semantic light and dark surfaces
- Thin neutral borders
- 8px control radius
- Visible focus states
- Restrained motion that respects `prefers-reduced-motion`

## Regenerating the one-page PDF

The PDF generator requires Python and ReportLab:

```bash
python3 scripts/build_one_pager.py
```

The generated file is written to:

```text
public/nst-studio-one-pager.pdf
```

## Current placeholders

The following items require confirmed production information before launch:

- Mentor names, photos, experience, and LinkedIn profiles
- Cal.com or Calendly booking embed
- Contact email and LinkedIn URL
- Case-study destination pages
- Code and IP ownership policy
- Support and warranty terms
- Client approval for names, project details, and proof metrics
- Final NST Studio logo asset

Placeholders are labelled in the interface so they cannot be mistaken for confirmed content.

## Validation

The initial implementation has been checked at these viewport widths:

- 375px mobile
- 768px tablet
- 1440px desktop

Both light and dark themes were reviewed. The production build and TypeScript validation pass successfully.
