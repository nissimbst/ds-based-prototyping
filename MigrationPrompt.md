# This is just a placeholder for the rename operation

**Objective:** Build a Turborepo monorepo featuring a Next.js web application (`apps/web`) that utilizes a shared Shadcn UI component library (`packages/ui`). The goal is to add a comprehensive set of UI components to the library and display them on a dedicated showcase page (`apps/web/app/showcase/page.tsx`), ensuring all dependencies and configurations are correctly handled to avoid common build/runtime errors.

**Prerequisites:**

*   Assume a base Turborepo monorepo structure exists (e.g., created via `npx create-next-app -e with-turborepo`).
*   Assume `pnpm` is the package manager.
*   Assume a Node Version Manager (like `nvm`) is available and a suitable Node.js version (e.g., >= 20.x, matching Next.js requirements) is active (`nvm use 20`).
*   Assume `shadcn-ui` has been *initially* run in `packages/ui` (creating `components.json`, adding `utils.ts`, etc.) but only contains the basic `Button` component initially.
*   Assume `PROJECT_STRUCTURE_RULES.md` exists at the root and should be updated as components are added.

**Instructions:**

**Phase 1: Initial Setup & Showcase Base**

1.  **Add Initial UI Components:**
    *   Navigate to the `packages/ui` directory.
    *   Run `pnpm dlx shadcn@latest add card input label -y`.
    *   Verify these components are added to `packages/ui/src/components/`.
2.  **Create Showcase Page:**
    *   Create the directory `apps/web/app/showcase`.
    *   Create the file `apps/web/app/showcase/page.tsx`.
    *   Make it a client component (`"use client"`).
    *   Add basic React structure (import React, default function `ShowcasePage`).
    *   Import `Button`, `Card`, `Input`, `Label` from `@workspace/ui/components/*`.
    *   Add simple usage examples for these components within `<section>` blocks inside a main `div` container on the page.
3.  **Update Rules:** Edit `PROJECT_STRUCTURE_RULES.md` and update the file tree snapshot under section 1 to include `card.tsx`, `input.tsx`, and `label.tsx`.

**Phase 2: Proactive Configuration & Styling Setup**

1.  **Verify Tailwind Configuration:**
    *   Ensure `packages/ui/tailwind.config.ts` (or `.js`/`.mjs`) exists. If not, create it with standard Shadcn UI settings (darkMode: "class", content paths including `./src/**/*.{ts,tsx}` and `../../apps/web/**/*.{ts,tsx}`, theme extensions for colors/radius/keyframes, `tailwindcss-animate` plugin).
    *   Ensure `packages/ui/postcss.config.mjs` (or `.js`) exists and correctly includes `@tailwindcss/postcss`.
2.  **Verify Dependencies:**
    *   Check `packages/ui/package.json` `devDependencies` includes `tailwindcss-animate`. If not, run `pnpm add -D tailwindcss-animate` in `packages/ui`.
    *   Check `apps/web/package.json` `devDependencies` includes `@tailwindcss/postcss`. If not, run `pnpm add -D @tailwindcss/postcss` in `apps/web`.
3.  **Verify Global Styles & Providers:**
    *   Ensure `packages/ui/src/styles/globals.css` exists and contains the `@layer base`, `:root`, and `.dark` definitions with CSS variables.
    *   Ensure `apps/web/app/layout.tsx` imports `"@workspace/ui/globals.css"`.
    *   Ensure `apps/web/app/layout.tsx` uses a `ThemeProvider` (like from `next-themes`) configured for `attribute="class"` and wraps the main `{children}`.
4.  **Restart Server Reminder:** *Crucially, note that after confirming/making changes in this phase, the development server (`pnpm dev`) MUST be stopped and restarted for Tailwind configuration changes to take effect.*

**Phase 3: Add Components (Batch 1: A-B)**

1.  **Add Components:**
    *   Navigate to `packages/ui`.
    *   Run `pnpm dlx shadcn@latest add accordion alert alert-dialog aspect-ratio avatar badge -y`.
2.  **Dependency Analysis & Installation:**
    *   Analyze source code of newly added components in `packages/ui/src/components/` for runtime library imports (e.g., `react-day-picker` if Calendar was here).
    *   Install any identified *runtime* dependencies into `apps/web` (navigate to `apps/web` and run `pnpm add [dependency]`).
3.  **Update Showcase Page:**
    *   Edit `apps/web/app/showcase/page.tsx`.
    *   Import the new components (Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge).
    *   Add `<section>` blocks with usage examples for each. Include state management if needed (e.g., `useState` for Accordion state).
4.  **Update Rules:** Edit `PROJECT_STRUCTURE_RULES.md`'s file tree snapshot to include the newly added component files.

**Phase 4: Add Components (Batch 2: C)**

1.  **Add Components:**
    *   Navigate to `packages/ui`.
    *   Run `pnpm dlx shadcn@latest add calendar card carousel checkbox collapsible command context-menu -y` (Note: `Card` and `Checkbox` might be skipped if added previously).
2.  **Dependency Analysis & Installation:**
    *   Analyze component source in `packages/ui` (e.g., `calendar` needs `react-day-picker`, `command` needs `cmdk`).
    *   Install runtime dependencies (`react-day-picker`, `cmdk`) into `apps/web`.
3.  **Update Showcase Page:**
    *   Edit `apps/web/app/showcase/page.tsx`.
    *   Import new components.
    *   Add `<section>` examples. Include state management for `Calendar`, `Carousel`, `Collapsible`, `Command`. Import necessary icons (`lucide-react`) for examples.
4.  **Update Rules:** Edit `PROJECT_STRUCTURE_RULES.md`'s file tree snapshot.

**Phase 5: Add Components (Batch 3: D-Z Common)**

1.  **Add Components:**
    *   Navigate to `packages/ui`.
    *   Run `pnpm dlx shadcn@latest add dialog drawer dropdown-menu form hover-card menubar navigation-menu pagination popover progress radio-group resizable scroll-area separator sheet skeleton slider sonner switch table tabs textarea toggle toggle-group tooltip -y` (Note: `dialog`, `tabs` may be skipped).
2.  **Dependency Analysis & Installation:**
    *   Analyze component source in `packages/ui` (e.g., `form` needs `react-hook-form`, `zod`, `@hookform/resolvers`, `sonner` needs `sonner` library).
    *   **Crucially:** Install these runtime dependencies (`react-hook-form`, `zod`, `@hookform/resolvers`, `sonner`) explicitly into `apps/web`.
3.  **Update Showcase Page:**
    *   Edit `apps/web/app/showcase/page.tsx`.
    *   Import new components. Import helper libraries (`useForm`, `zod`, `zodResolver`, `toast` from `sonner`). Add `TooltipProvider` wrapper and `SonnerToaster`.
    *   Add `<section>` examples. Include state/form setup for `Form`, `Progress`, `Slider`. Import icons.
4.  **Update Rules:** Edit `PROJECT_STRUCTURE_RULES.md`'s file tree snapshot.

**Phase 6: Add Theme Toggle**

1.  **Create Toggle Component:**
    *   Create `apps/web/components/theme-toggle-button.tsx`.
    *   Implement it as a client component using `useTheme` from `next-themes` and `Button` from `@workspace/ui`. Use `Sun` and `Moon` icons from `lucide-react`.
2.  **Add to Layout:**
    *   Edit `apps/web/app/layout.tsx`.
    *   Import `ThemeToggleButton`.
    *   Render it within the `Providers` component, applying fixed positioning (e.g., `className="fixed top-4 right-4 z-50"`).

**Phase 7: Final Verification & Cleanup**

1.  **Verify `package.json`:** Manually inspect `apps/web/package.json`. Ensure no dependencies (especially `zod`) have incorrect `link:` resolutions. Correct them to standard version constraints (e.g., `"zod": "^3.x.x"`) if needed.
2.  **Final Install:** Navigate to the project root. Run `pnpm install` one last time to ensure consistency based on potentially corrected `package.json` files.
3.  **Restart Server:** Stop and restart the development server (`pnpm dev`).
4.  **Test:** Load the `/showcase` page in the browser. Verify all components render correctly, styles are applied in both light and dark modes (using the toggle), and interactive components work. Check the browser console for errors. 