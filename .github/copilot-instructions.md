<!-- Copilot / AI agent instructions for the web-studio-jb project -->
# Project snapshot

This is a small React + Vite single-page marketing site using Tailwind CSS. Key entry points:

- `src/main.jsx` — app bootstrap (renders `App`).
- `src/App.jsx` — router setup (uses `react-router-dom` with `Routes` and `Route`).
- `src/pages/` — page-level components (e.g. `Home.jsx`).
- `src/components/` — reusable UI components (`Nav`, `Hero`, `Services`, etc.).
- `src/index.css` and `tailwind.config.js` — Tailwind-based styling.

# How to run (developer workflows)

- Start dev server (Vite/HMR): `npm run dev`.
- Build for production: `npm run build`.
- Preview a production build: `npm run preview`.
- Lint: `npm run lint` (ESLint config is at the repository root: `eslint.config.js`).

# Code & style conventions (observable patterns)

- File types: plain React `.jsx` files (no TypeScript). Keep JSX files under `src/`.
- Components are exported as named exports in `src/components` (e.g. `export const Nav = () => {}`) and imported using named imports: `import { Nav } from '../components/Nav'`.
- Pages are under `src/pages` and are composed into `App.jsx` via `react-router-dom` routes. To add a route: add a file to `src/pages` and add a `<Route ... element={<YourPage/>}/>` in `src/App.jsx`.
- Styling is Tailwind-first. Prefer composing utility classes in JSX rather than adding global CSS. Global entrypoint: `src/index.css`.
- Layout pattern: many components use a centered container `max-w-6xl mx-auto px-6` — follow this for consistent spacing.

# Integration points & notable dependencies

- `react-router-dom` (v7): routing is done via `<BrowserRouter>` and `<Routes>`; `Route index element={<Home/>}` is used for root.
- `lucide-react` is included for icons — import icons as components: `import { X } from 'lucide-react'`.
- Contact form uses a `mailto:` action in `src/components/ContactFrom.jsx`. If converting to a backend API, update the form `action` and method, and add client-side validation.

# When modifying or adding components

- Use named exports and keep components small and focused. Example pattern:

  - `src/components/Nav.jsx` exports `Nav` as `export const Nav = () => { ... }` and uses React state for small UI toggles.

- Use Tailwind utility classes for spacing, colors, and responsive behavior. Use `md:` breakpoints as in existing components.
- Preserve semantic HTML and basic a11y: keep `aria-label` on menu buttons and `button` elements for interactive controls.

# Linting & formatting

- ESLint is configured; run `npm run lint` before PRs. There is no project-wide formatter script — follow existing code style (2-space indentation, JSX style used across files).

# Common change examples

- Add a new page: create `src/pages/NewPage.jsx` (export named), add a route in `src/App.jsx`, and add a nav link in `src/components/Nav.jsx`.
- Add a component: create `src/components/MyComponent.jsx` with a named export and update `src/pages` or `src/components` usage.

# Files to inspect for major changes

- `vite.config.js` — Vite plugin/react settings.
- `tailwind.config.js` — Tailwind theme and content paths.
- `eslint.config.js` — lint rules.

# Safety notes for AI agents

- Do not modify the project's package manager or replace the build system. Use the scripts in `package.json`.
- Avoid changing project structure (file renames) unless the change is deliberate and small — notify maintainers in the PR.
- If you add network calls (forms, analytics), describe the security/privacy impact and where secrets/config should live.

# Example snippets (copy/paste friendly)

- Start dev server:

```bash
npm run dev
```

- Add a route in `src/App.jsx`:

```jsx
import { Contact } from './pages/Contact';

<Routes>
  <Route index element={<Home/>} />
  <Route path="contact" element={<Contact/>} />
</Routes>
```

# Feedback
If anything in these instructions is unclear or you want additional examples (PR templates, commit message style, or test guidance), tell me which areas to expand.
