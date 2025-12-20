# 🎨 Portfolio Microfrontend

Modern and high-performance portfolio with **Microfrontend architecture**, built with React, TypeScript, and SASS. Host application consuming WordPress data via REST API and integrating isolated microfrontends via iframe.

## 📋 About the Project

This project is a professional portfolio demonstrating modern front-end development best practices, including:
- **Microfrontend Architecture** with iframe for complete isolation
- **Monorepo Structure** with npm workspaces (host + microfrontends)
- **Design System** complete with design tokens (colors, spacing, typography)
- **Event Bus** for inter-MFE communication via postMessage
- **Type-safe** with TypeScript across all workspaces
- **Optimized Performance** with lazy loading and code splitting
- **SEO-friendly** with meta tags and semantic structure
- **100% Responsive** with mobile-first approach
- **Runtime Isolation** with sandbox security
- **Animated SVG Favicon** with brand color synchronization
- **PWA Ready** with manifest and mobile theme-color customization

## 🛠️ Tech Stack

### Core
- **React 18** - UI Library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **React Router** - SPA Navigation
- **npm Workspaces** - Monorepo management
- **Concurrently** - Multi-process orchestration

### Styling
- **SASS/SCSS** - CSS Pre-processor
- **Design System** - Standardized tokens and components
- **CSS Grid/Flexbox** - Responsive layouts

### API & Data
- **WordPress REST API** (v2)
- **Advanced Custom Fields** (ACF v3)

### Quality & Tooling
- **Vitest** - Unit testing framework
- **React Testing Library** - User-centric component tests
- **Happy-DOM** - Lightweight browser simulation environment
- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **Biome** - Unified Lint + Formatter (performance-focused)
- **Husky** - Git hooks
- **Lint-Staged** - Pre-commit validation

## 📁 Project Structure (Monorepo)

```
portfolio-mfe-2025/
├── apps/                      # Workspaces (Microfrontends)
│   ├── host/                 # 🏠 Host Application (Container)
│   │   ├── src/
│   │   │   ├── api/          # WordPress API Client
│   │   │   │   └── wp.ts
│   │   │   ├── assets/       # Static assets
│   │   │   ├── components/   # Host Components
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   ├── Spinner.tsx
│   │   │   │   └── MFEErrorBoundary.tsx  # Specific error boundary for MFEs
│   │   │   ├── pages/        # Main pages
│   │   │   │   ├── Home.tsx
│   │   │   │   ├── Projects.tsx
│   │   │   │   ├── About.tsx
│   │   │   │   ├── Certificates.tsx
│   │   │   │   ├── Laboratory.tsx         # 🔬 MFE Viewer with iframe
│   │   │   │   └── ProjectDetails.tsx
│   │   │   ├── utils/        # Utilities
│   │   │   │   └── eventBus.ts           # 📡 Event Bus (postMessage)
│   │   │   ├── styles/       # Design System (SASS)
│   │   │   │   ├── tokens/   # Design Tokens
│   │   │   │   ├── base/     # Reset and global
│   │   │   │   ├── components/
│   │   │   │   │   ├── _laboratory.scss  # Iframe viewer styles
│   │   │   │   │   └── ...
│   │   │   │   └── main.scss
│   │   │   ├── App.tsx
│   │   │   └── main.tsx
│   │   ├── public/
│   │   │   └── certificates/
│   │   ├── package.json      # Host dependencies
│   │   ├── vite.config.ts
│   │   └── tsconfig.json
│   │
│   └── projects/             # 🎯 Projects Microfrontend (Remote)
│       ├── src/
│       │   ├── projects/     # Isolated projects
│       │   │   ├── todo-app/
│       │   │   ├── weather/
│       │   │   └── timer/
│       │   ├── App.tsx       # MFE Router
│       │   └── main.tsx
│       ├── package.json      # Independent dependencies
│       ├── vite.config.ts
│       └── tsconfig.json
│
├── node_modules/             # Root dependencies
├── package.json              # 📦 Root - Workspace orchestration
├── .env                      # Environment variables
├── eslint.config.js          # Shared ESLint config
├── .prettierrc               # Shared Prettier config
└── README.md
```





## 🏗️ Architecture & Microfrontends

This project uses **Microfrontend architecture with iframes** for complete isolation of runtime and styles.

> [!NOTE]
> **Architectural Roadmap**: The current iframe approach is a strategic choice for isolation. Future plans include migrating to **pure Module Federation** for deeper integration.

### 📐 Workspace Structure
```mermaid
graph TB
    ROOT["📦 Root (Monorepo)"] --> HOST["🏠 Host (Port: 5173)"]
    ROOT --> PROJECTS["🎯 Projects MFE (Port: 5001)"]
    HOST --> |"postMessage"| PROJECTS
```

### 🔄 Communication Flow
```mermaid
sequenceDiagram
    participant Host as Host App
    participant Bus as Event Bus
    participant MFE as Projects MFE
    Host->>MFE: Load via iframe
    MFE->>Host: postMessage(ready)
    Host->>Bus: publish(load)
```

### 🛠️ Tech Highlights
- **Communication**: PostMessage API + Event Bus for bidirectional data flow.
- **Security**: Sandbox attributes for iframe isolation.
- **Design Pattern**: Atomic Design System + ITCSS-inspired SASS organization.
- **Registry**: Centralized projects registry in `projectsData.ts`.

## 🚀 Getting Started

### 1. Initial Setup

```bash
# Clone the repository
git clone <repo-url>
cd portfolio-mfe-2025

# Install dependencies for all workspaces
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your WordPress URLs
```

### 2. Development (Monorepo)

```bash
# Start ALL microfrontends simultaneously
npm run dev
# This runs:
# - Host App at http://localhost:5173
# - Projects MFE at http://localhost:5001

# OR run individually:

# Host only
npm run dev:host

# Projects MFE only
npm run dev:projects
```

**Configured Ports:**
- **Host**: `5173` (main application)
- **Projects MFE**: `5001` (projects microfrontend)

### 3. Build & Deploy

```bash
# Generate build for ALL workspaces
npm run build

# OR individual build:
npm run build:host      # Build host only
npm run build:projects  # Build Projects MFE only

# Preview builds
npm run preview         # Preview all
npm run preview:host    # Preview host only
npm run preview:projects # Preview MFE only

# Deploy:
# 1. Upload apps/host/dist/ to your main server
# 2. Upload apps/projects/dist/ to a separate subdomain or path
# 3. Update URLs in code to point to production
```

### 4. Linting & Formatting

```bash
# Check for lint issues (ESLint)
npm run lint

# Auto-fix issues (ESLint)
npm run lint:fix

# Format code (Prettier)
npm run format

# Run lint + format at once (ESLint + Prettier)
npm run clean

# Lint and format with Biome (optional)

# Check all apps with Biome (recommended rules)
npm run biome:check

# Format code using Biome formatter
npm run biome:format

# CI/CD verification command
npm run biome:ci
```

### 🛠️ Common Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Starts all apps (Host + Remotes) |
| `npm run build` | Builds all workspaces |
| `npm run lint` | Runs Linter and Formatter |
| `npm run test` | Executes unit tests (Vitest) |

## 🌐 Microfrontends Configuration

### Host ↔ MFE Communication

**Event Bus (postMessage):**

```typescript
// In Host (apps/host/src/utils/eventBus.ts)
import { eventBus, MFEEvents } from './utils/eventBus'

// Publish event
eventBus.publish(MFEEvents.PROJECT_LOADED, { projectId: 'todo-app' })

// Subscribe to event
eventBus.subscribe(MFEEvents.PROJECT_LOADED, (payload) => {
  console.log('Project loaded:', payload)
})
```

**PostMessage from MFE to Host:**

```typescript
// In MFE (apps/projects/src/...)
window.parent.postMessage(
  {
    type: 'PROJECT_READY',
    payload: { name: 'Todo App' }
  },
  'http://localhost:5173' // Host Origin
)
```

### Adding a New Microfrontend

1. **Create new workspace:**

```bash
mkdir -p apps/new-mfe
cd apps/new-mfe
npm init -y
```

2. **Add to root package.json:**

```json
{
  "workspaces": [
    "apps/host",
    "apps/projects",
    "apps/new-mfe"  // Add here
  ]
}
```

3. **Add dev/build scripts:**

```json
"scripts": {
  "dev:new-mfe": "npm run dev --workspace=apps/new-mfe",
  "build:new-mfe": "npm run build --workspace=apps/new-mfe"
}
```

4. **Configure port in Vite:**

```typescript
// apps/new-mfe/vite.config.ts
export default defineConfig({
  server: {
    port: 5002, // Unique port
    strictPort: true
  }
})
```

### Environment Variables (apps/host/.env)

```env
# WordPress API (used only when mock is disabled)
VITE_WP_API_BASE=https://your-wordpress-site.com/wp-json/wp/v2

# Microfrontends Base URL (Default: localhost:5001)
# In production, point to the URL where projects are hosted
VITE_PROJECTS_URL=http://localhost:5001

# Mock data (set to 'true' to avoid CORS issues during development)
VITE_USE_MOCK_DATA=true
```

> **💡 Tip**: Use mocked data during development to avoid CORS issues. Set `VITE_USE_MOCK_DATA=false` only when ready to connect to the real WordPress API.

### 🎭 Mock System

The project includes a simple mock system to avoid CORS issues during local development.

**Files:**
- `apps/host/src/api/mockData.ts` - Example project data
- `apps/host/src/api/wp.ts` - API client with mock support
- `apps/host/MOCK_SYSTEM.md` - Detailed documentation
- `ENV_CLEANUP.md` - Environment variable cleanup guide

**How to use:**

1. **Enable mock mode** (edit `apps/host/.env`):
   ```env
   VITE_USE_MOCK_DATA=true
   ```

2. **Restart development server**:
   ```bash
   npm run dev
   ```

3. **Check console** - You will see:
   ```
   🎭 Using mock data for projects
   ```

**Customizing mocked data:**

Edit `apps/host/src/api/mockData.ts` to add, remove, or modify mocked projects:

```typescript
export const mockProjects: WPPost[] = [
  {
    id: 7,
    slug: 'my-new-project',
    acf: {
      title_post: 'My New Project',
      // ... rest of data
    }
  }
]
```

**Active variables:**
- ✅ `VITE_WP_API_BASE` - WordPress API URL (only when `USE_MOCK_DATA=false`)
- ✅ `VITE_USE_MOCK_DATA` - Toggles mock mode (default: `false`)

### Expected ACF Fields

```typescript
interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  acf: {
    title_post?: string;
    image_post?: {
      url: string;
      sizes?: {
        medium?: string;
        large?: string;
      };
    };
    list_of_technologies?: TechnologyTag[];
  };
}
```

## 🎯 Features

### Architecture
- ✅ **Microfrontend with iframe** for complete isolation (Roadmap: Pure Module Federation)
- ✅ **Monorepo** with npm workspaces
- ✅ **Event Bus** for inter-MFE communication
- ✅ **Specific MFE Error Boundaries**
- ✅ **Sandbox Security** in iframes

### Design & UX
- ✅ Complete Design System with SASS
- ✅ Total Type-safety with TypeScript
- ✅ Image Lazy Loading
- ✅ Smooth Animations (Framer Motion)
- ✅ Cinematic Home Page
- ✅ **Animated SVG Favicon** synchronized with brand colors
- ✅ **PWA Manifest** with custom mobile theme-color
- ✅ 100% Responsive (Mobile & Desktop)
- ✅ Optimized SEO

### Integrations
- ✅ WordPress API Integration
- ✅ Advanced Custom Fields (ACF)
- ✅ Legacy Vue 2 Projects (via Custom URL)

### Quality & Tooling
- ✅ Optimized Performance
- ✅ Git hooks (Husky + Lint-Staged)
- ✅ Pre-configured ESLint + Prettier
- ✅ Optimized build with Vite

## 📱 Responsiveness

### Breakpoints & Mixins

Breakpoints are defined in `_breakpoints.scss`. **Crucial Rule**: Hardcoded pixel values in media queries are forbidden. Always use the provided mixins.

| Breakpoint | Value | Mixin | Use Case |
|------------|-------|-------|----------|
| **sm** | 640px | `@include media-sm` | Mobile |
| **md** | 768px | `@include media-md` | Tablet Portrait |
| **lg-tablet**| 1024px | `@include media-lg-tablet` | Tablet Landscape |
| **lg** | 960px | `@include media-lg` | Small Laptops |
| **xl** | 1280px | `@include media-xl` | Desktop |
| **2xl** | 1536px | `@include media-2xl` | Large Screens |
| **short-v** | 850px (h) | `@include media-short-vertical`| Small Heights |

### Usage Example:
```scss
.my-component {
  width: 100%;
  
  @include media-md-up {
    width: 50%; // Responsive adjustment using standard mixin
  }
}
```

## 🧪 Automated Testing

The project includes a robust suite of unit tests using **Vitest** and **React Testing Library**.

### Testing Stack
- **Vitest**: Fast and Vite-compatible test runner.
- **Happy-DOM**: Simulated DOM environment for fast execution.
- **React Testing Library**: User-centric interaction tests.

### Coverage
Tests cover key aspects of the `host` application:

1. **Core Components**:
   - `Card`, `ProjectCard`, `Spinner`, `Sidebar`, `MFEErrorBoundary`.
   - Validation of rendering, variants, interactivity, and error handling.

2. **Pages**:
   - `Home`, `About`, `Projects`.
   - Mocks for external APIs (GitHub, WordPress).
   - Validation of loading states and data display.

### Running Tests

```bash
# Run all tests (default watch mode)
npm run test

# Run tests once (CI/CD)
npm run test -- --run

# Run tests with graphical interface
npm run test:ui
```
