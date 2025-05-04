# Prompt: Replicate Shadcn UI Monorepo Showcase Project (Following Official Guide)

**Objective:** Build a Turborepo monorepo using the official `shadcn@latest init` monorepo setup procedure ([https://ui.shadcn.com/docs/monorepo](https://ui.shadcn.com/docs/monorepo)). Add a comprehensive set of UI components to the shared library (`packages/ui`) and display them on a dedicated showcase page (`apps/web/app/showcase/page.tsx`), applying necessary checks and steps to ensure a working result.

**Instructions:**

**Phase 1: Environment & Base Project Setup**

1.  **Verify/Install Node.js & pnpm:**
    *   **Check Node.js:** Run `node -v`. If the version is not suitable (v20.x or later recommended), *propose* running `nvm install 20 && nvm use 20` (requires `nvm` pre-installed and user approval). *Note: `nvm use` might not persist correctly across tool calls.*
    *   **Check pnpm:** Run `pnpm -v`. If the command fails or the version is outdated, *propose* running `npm install -g pnpm` (requires user approval and may need appropriate permissions).
2.  **Initialize Shadcn UI Monorepo (Official Method):**
    *   Navigate to the desired parent directory for the project.
    *   Run `pnpm dlx shadcn@latest init`.
    *   **Crucially, when prompted `Would you like to start a new project?`, ensure the `Next.js (Monorepo)` option is selected.** (This command should create the base project structure: `apps/web`, `packages/ui`, Turborepo config, etc., potentially including `Button`.)
    *   `cd` into the newly created project directory.
3.  **Initial Dependencies:** Run `pnpm install` at the project root to install base dependencies created by the `init` command.
4.  **Create `PROJECT_STRUCTURE_RULES.md`:** Create an empty file named `PROJECT_STRUCTURE_RULES.md` at the project root. We will populate it later.

**Phase 2: Verify Initial Setup & Configuration**

1.  **Verify File Structure:** Check that the expected directories (`apps/web`, `packages/ui`) and key files (`package.json`, `turbo.json`, `pnpm-workspace.yaml`) exist.
2.  **Verify `components.json`:**
    *   Check `apps/web/components.json` exists and contains correct aliases like `"ui": "@workspace/ui/components"` and `"utils": "@workspace/ui/lib/utils"` (as shown in [https://ui.shadcn.com/docs/monorepo](https://ui.shadcn.com/docs/monorepo)).
    *   Check `packages/ui/components.json` exists and contains correct aliases like `"components": "@workspace/ui/components"` and `"utils": "@workspace/ui/lib/utils"`.
3.  **Verify Tailwind Config:** Verify `packages/ui/tailwind.config.ts` (or js/mjs) exists and `content` includes relevant paths (`./src/**/*.{ts,tsx}`, `../../apps/web/**/*.{ts,tsx}`).
4.  **Proactive Build Dependency Checks:**
    *   Ensure `packages/ui/package.json` has `tailwindcss-animate` in `devDependencies`. If not: `cd packages/ui && pnpm add -D tailwindcss-animate && cd ..`.
    *   Ensure `apps/web/package.json` has `@tailwindcss/postcss` in `devDependencies`. If not: `cd apps/web && pnpm add -D @tailwindcss/postcss && cd ..`.
5.  **Verify Providers & Global CSS:** Ensure `apps/web/app/layout.tsx` uses a `ThemeProvider` and imports `"@workspace/ui/globals.css"`.

**Phase 3: Add Components (Using Official Monorepo Workflow)**

*Note: Run all `shadcn add` commands from the `apps/web` directory as recommended by [https://ui.shadcn.com/docs/monorepo](https://ui.shadcn.com/docs/monorepo).* 

1.  **Navigate:** `cd apps/web`.
2.  **Add Components (Batched):**
    *   Run `pnpm dlx shadcn@latest add button card input label -y`.
    *   Run `pnpm dlx shadcn@latest add accordion alert alert-dialog aspect-ratio avatar badge -y`.
    *   Run `pnpm dlx shadcn@latest add calendar carousel checkbox collapsible command context-menu -y`.
    *   Run `pnpm dlx shadcn@latest add dialog drawer dropdown-menu form hover-card menubar navigation-menu pagination popover progress radio-group resizable scroll-area separator sheet skeleton slider sonner switch table tabs textarea toggle toggle-group tooltip -y`.
    *   **Verification:** After each batch, check `packages/ui/src/components/` to confirm files were added there.
3.  **Dependency Verification (Crucial Check):**
    *   **Inspect `apps/web/package.json`:** Check if the `shadcn add` commands (run from `apps/web`) automatically added necessary runtime dependencies like `react-day-picker`, `cmdk`, `react-hook-form`, `zod`, `@hookform/resolvers`, `sonner` to *this* file.
    *   **If dependencies are missing:** Run `pnpm add [missing-dependency-list]` within the `apps/web` directory to install them explicitly.

**Phase 4: Create & Populate Showcase Page**

1.  **Create Showcase Page:** Create `apps/web/app/showcase/page.tsx` (client component).
2.  **Import & Implement:**
    *   Import React and *all* the added UI components from `@workspace/ui/components/*`.
    *   Import necessary runtime libraries/hooks installed in Phase 3 (e.g., `useForm`, `zod`, `zodResolver`, `toast` from `sonner`, icons from `lucide-react`).
    *   Implement `<section>` examples for all components. Include state management and setup (form schema, etc.).
    *   Add required context providers (`TooltipProvider`) and renderers (`SonnerToaster`).
3.  **Add Theme Toggle:**
    *   Create `apps/web/components/theme-toggle-button.tsx` (client component using `useTheme`, `Button`, `Sun`, `Moon`).
    *   Import and render `<ThemeToggleButton />` in `apps/web/app/layout.tsx` inside `Providers` with fixed positioning.

**Phase 5: Finalize & Test**

1.  **Update Rules Doc:** Edit `PROJECT_STRUCTURE_RULES.md` at the project root. Add a comprehensive file tree snapshot reflecting the final state and include the structural rules.
2.  **Verify `package.json`:** Manually double-check `apps/web/package.json` for any incorrect `link:` resolutions (especially for `zod`). Correct if found.
3.  **Final Install:** Navigate to project root. Run `pnpm install`.
4.  **Restart & Test:** Stop the dev server (if running). Run `pnpm dev` from the project root. Thoroughly test `/showcase` page, component interactions, theme toggling, and check browser console for errors. 