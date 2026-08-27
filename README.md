# ZenCare Front-End (Physiotherapy & Wellness Platform)

Welcome to the **ZenCare** front-end repository. ZenCare is a modern web application designed for ZenCare Physiotherapy & Wellness, allowing clients to learn about services, manage bookings, and consult with physiotherapy experts.

---

## 🚀 Technology Stack

This project is built using a modern, type-safe, and highly performant front-end stack:

*   **Framework:** [React 18](https://react.dev/) (Functional components, Hooks)
*   **Build Tool & Dev Server:** [Vite](https://vitejs.dev/) (SWC compiler for ultra-fast builds)
*   **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict type-checking)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives for accessible, unstyled foundation)
*   **State & Query Management:** [TanStack React Query (v5)](https://tanstack.com/query/latest) (Server state synchronization)
*   **Routing:** [React Router DOM (v6)](https://reactrouter.com/) (Client-side routing)
*   **Backend Integration:** [Supabase](https://supabase.com/) (Authentication, Database PostgreSQL, RLS Policies, Edge Functions)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Testing:** [Vitest](https://vitest.dev/) (Unit and component tests)

---

## 🛠️ Project Structure

The project directory is structured as follows:

```text
├── Implementation/          # Implementation docs, database schemas, and trigger definitions
├── public/                  # Static assets (images, logos, opengraph-image.png, etc.)
├── src/
│   ├── components/          # Reusable UI components (buttons, dialogs, sections, layouts)
│   │   └── ui/              # Auto-generated shadcn base components
│   ├── hooks/               # Custom React hooks (e.g., toast hooks)
│   ├── lib/                 # Shared utilities, client configurations (e.g., supabaseClient)
│   ├── pages/               # Main page/route entrypoints (Index.tsx, NotFound.tsx)
│   ├── App.tsx              # Main entrypoint routing configuration
│   ├── index.css            # Global CSS variables, custom Tailwind utilities
│   └── main.tsx             # ReactDOM bootstrapper
├── package.json             # Core dependency management
└── tsconfig.json            # TypeScript configuration
```

---

## 🏁 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (LTS recommended) or [Bun](https://bun.sh/) package manager.

### 1. Installation
Clone the repository and install the dependencies:

```bash
# Using npm
npm install

# Or using Bun (preferred/supported lockfile exists)
bun install
```

### 2. Run Development Server
Start the development server with hot-reload:

```bash
# Using npm
npm run dev

# Or using Bun
bun run dev
```
Open `http://localhost:5173` to preview the site locally.

### 3. Run Tests
Verify application functionality with Vitest:

```bash
# Using npm
npm run test

# Or using Bun
bun test
```

### 4. Build for Production
Create an optimized production build of the static application files:

```bash
# Using npm
npm run build

# Or using Bun
bun run build
```

---

## 🔒 Backend & Database Integration (Supabase)

This front-end interacts directly with a **Supabase** backend:
*   **Authentication:** Supabase Auth handles client signups, logins, and role administration.
*   **Database Schema:** Contains tables for `profiles`, `bookings`, `sessions`, `booking_status_history`, and auditing.
*   **Row Level Security (RLS):** Secures client details, restricting sensitive operations to authenticated users or administrators.
*   **Triggers:** Automates database events (e.g., upgrading a profile from `'user'` to `'client'` upon their first confirmed booking).

For detailed database schemas and triggers, refer to the [IMPLEMENTATION_IMPROVEMENT.md](file:///Users/admin/Anti%20Gravity%20Repository%20Destination/zencare-front-end/Implementation/IMPLEMENTATION_IMPROVEMENT.md) documentation.
