
<div align="center">
  <img src="./src/assets/bintraq-logo.png" alt="Bintraq Logo" width="500" />
</div>

## About Bintraq

Bintraq is a green technology project that combines USSD, mobile applications, IoT-enabled bin sensors, and a centralized monitoring platform to improve waste management efficiency, transparency, and environmental accountability. The platform helps households and businesses manage waste responsibly while supporting cleaner, healthier, and more sustainable communities in South Sudan.

## What We Do

We provide an integrated, easy-to-use system for scheduling, tracking, and managing waste collection and disposal. Our solutions are designed for reliability, accuracy, scalability, and long-term maintainability, even in low-connectivity environments.

## Key Technologies

- **USSD** — Enables waste service access for users without internet
- **Mobile Application** — Allows users to request pickups, track services, and receive notifications
- **IoT Bin Sensors** — Monitor bin fill levels to optimize collection routes and reduce overflow
- **Monitoring Platform** — Provides real-time insights, analytics, and accountability for operators and stakeholders

## Sectors We Serve

- **Households** — Regular collection services to keep homes clean and healthy
- **Businesses** — Customized solutions for shops, offices, and corporate facilities
- **Institutions** — Secure and compliant services for schools, hospitals, and government buildings
- **Markets** — Fast, frequent servicing for busy commercial centers and marketplaces
- **Events** — On-demand waste management for festivals, conferences, and public gatherings
- **Industrial** — Comprehensive programs for factories and production sites

## Tech Stack

### Frontend

- **React 19** — Modern UI library for building interactive interfaces
- **TypeScript** — Type-safe JavaScript for robust code
- **Vite** — Lightning-fast build tool and development server
- **Tailwind CSS** — Utility-first CSS framework for responsive design
- **TanStack Query** — Server state management
- **Zustand** — Lightweight state management

## Getting Started

### Prerequisites

- Node.js 20+ ([Download](https://nodejs.org))
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Bintraq-Inc/bintraq-website.git
   cd bintraq-website
   ```

2. **Install dependencies**

   ```bash
   npm ci
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`

## Development

### Available Scripts

- **`npm run dev`** — Start local development server with hot module replacement
- **`npm run build`** — Build for production with type checking
- **`npm run lint`** — Run ESLint to check code quality
- **`npm run preview`** — Preview production build locally
- **`npm run typecheck`** — Run TypeScript type checking (part of CI/CD)
- **`npm test`** — Run unit tests (part of CI/CD)

### Code Quality

This project enforces:

- TypeScript strict mode
- ESLint with recommended rules
- Prettier code formatting
- Husky git hooks

## Deployment

The project uses **GitHub Actions** for automated CI/CD:

1. **Quality Checks** — On every push and pull request:
   - Dependency installation
   - Linting
   - Type checking
   - Unit tests

2. **Production Deployment** — On merge to `master` branch:
   - Deployed to [Vercel](https://vercel.com)
   - Automatic rollback on build failures

### Environment Variables

Add these to your `.env.local` for development:

```env
VITE_API_BASE_URL=your_api_url_here
```

**Note:** `.env.local` is gitignored and should never be committed. Copy `.env.example` and rename it to `.env.local` locally.

### Production Environment Variables

For production (Vercel), set environment variables in the Vercel Dashboard:

1. Go to https://vercel.com/dashboard
2. Select your project **bintraq-website**
3. Click **Settings** → **Environment Variables**
4. Add your production environment variables

These will override local `.env.local` when deployed.

Required GitHub secrets for CI/CD:

- `VERCEL_TOKEN` — Vercel API token
- `ORG_ID` — Vercel organization ID
- `PROJECT_ID` — Vercel project ID

## Project Structure

```
bintraq-website/
├── src/
│   ├── components/          # Reusable React components
│   ├── config/              # Configuration files
│   ├── lib/                 # Utility functions
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Application entry point
├── public/                  # Static assets
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── tailwind.config.js       # Tailwind CSS configuration
```

## Contributing

We welcome contributions! Here's how to get involved:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code passes linting and type checks before submitting.

## License

This project is proprietary software owned by Bintraq Inc. All rights reserved.

## Contact & Support

For more information about Bintraq and our waste management solutions, visit:

- **Email** — <dhieumajok211@gmail.com>

---

**Bintraq is dedicated to delivering high-quality, robust, and easy-to-maintain waste management solutions tailored to South Sudan. We focus on environmental responsibility, operational excellence, and measurable community impact.**
