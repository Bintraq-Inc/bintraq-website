# Bintraq Website - AI Coding Instructions
Bintraq is a smart waste management platform focused on building innovative solutions for efficient waste collection and environmental sustainability in South Sudan.

Bintraq is a green technology project that combines USSD, a mobile application, IoT-enabled bin sensors, and a centralized monitoring platform to improve waste management efficiency, transparency, and environmental accountability. The platform helps households and businesses manage waste responsibly while supporting cleaner, healthier, and more sustainable communities.

Waste management platform marketing website built with React 19, TypeScript, Vite 7, and Tailwind CSS 4.

## Tech Stack & Patterns

### UI Components
- **shadcn/ui** configured with `new-york` style - add components via `npx shadcn@latest add <component>`
- Use `cn()` from `@/lib/utils` for conditional class merging:
  ```tsx
  import { cn } from "@/lib/utils"
  <div className={cn("base-class", isActive && "active-class")} />
  ```
- **Icons**: Use `lucide-react` or Google Material Symbols (`material-symbols-outlined`)

### Tailwind CSS v4 Patterns
- Use `@import "tailwindcss";` (never legacy `@tailwind` directives)
- Theme defined via CSS `@theme` directive in [src/index.css](src/index.css)
- Custom colors: `primary`, `primary-dark`, `background-light/dark`, `surface-light/dark`
- Custom shadows: `shadow-soft`, `shadow-glow`, `shadow-card`
- Custom animations: `animate-float`, `animate-spin-slow`, `animate-wiggle`

### Routing
- Using `react-router-dom` with Layout pattern
- Pages in `src/pages/`, shared components in `src/components/`
- Layout component wraps all routes with Header/Footer

### Path Aliases
Use `@/` prefix for imports from `src/`:
```tsx
import { cn } from "@/lib/utils"
import Home from "@/pages/Home"
import Header from "@/components/Header"
```

### State Management
- **Server state**: TanStack Query (`@tanstack/react-query`)
- **Client state**: Zustand - create stores in `src/stores/`

### Environment Variables
- Access via `ENV` object from `@/config/env` (Zod-validated)
- Prefix all env vars with `VITE_` for client-side access

## Project Structure
```
src/
├── components/        # Shared components (Header, Footer, Layout)
│   └── ui/           # shadcn/ui components (auto-generated)
├── pages/            # Route pages (Home, Solutions, Sectors, Contact)
├── config/env.ts     # Environment variable validation
├── lib/utils.ts      # Utility functions (cn helper)
└── assets/           # Static assets (images, SVGs)
```

## Development Commands
```bash
npm run dev        # Start dev server (localhost:5173)
npm run build      # TypeScript check + production build
npm run lint       # ESLint check
npm run typecheck  # TypeScript only (no emit)
```

## Design Patterns
- Mobile-first responsive design (`sm:`, `md:`, `lg:` breakpoints)
- Dark mode support with `dark:` variants on all visual properties
- Glassmorphism effects: `bg-surface-light/80 backdrop-blur-lg`
- Hover animations: `hover:-translate-y-2 transition-all duration-300`
- Group hover patterns: `group` parent + `group-hover:` children

## CI/CD Pipeline
- **PR/Push to master**: Runs lint, typecheck, and tests
- **Merge to master**: Auto-deploys to Vercel
- Pre-commit hooks run ESLint + Prettier via Husky

## Code Style
- TypeScript strict mode enabled
- Components: PascalCase files, default exports
- Utilities: camelCase, named exports
