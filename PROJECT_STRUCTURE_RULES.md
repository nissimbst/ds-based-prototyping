# Project Structure & AI Development Rules

This file serves as the **single-source of truth** for how the repository is organised and the constraints future code-generation tools (e.g. Cursor's AI agent) must obey.

---

## 1. Current File-Tree Snapshot

```
.
├── apps/
│   └── web/                # Next.js application
│       ├── app/
│       │   ├── dashboard/
│       │   │   ├── data.json
│       │   │   └── page.tsx
│       │   ├── favicon.ico
│       │   ├── layout.tsx
│       │   ├── login/
│       │   │   └── page.tsx
│       │   ├── page.tsx
│       │   └── showcase/
│       │       └── page.tsx
│       ├── components/
│       │   ├── app-sidebar.tsx
│       │   ├── chart-area-interactive.tsx
│       │   ├── login-form.tsx
│       │   ├── nav-main.tsx
│       │   ├── nav-projects.tsx
│       │   ├── nav-user.tsx
│       │   ├── providers.tsx
│       │   ├── team-switcher.tsx
│       │   └── theme-toggle-button.tsx
│       ├── hooks/          # (placeholder)
│       ├── lib/            # (placeholder)
│       ├── eslint.config.js
│       ├── components.json
│       ├── next-env.d.ts
│       ├── next.config.mjs
│       ├── package.json
│       ├── postcss.config.mjs
│       └── tsconfig.json
│
├── packages/
│   ├── ui/                 # Design-system / shared UI
│   │   ├── src/
│   │   │   ├── app/        # <-- CHECK: Seems misplaced based on rules
│   │   │   │   └── dashboard/
│   │   │   │       └── data.json
│   │   │   ├── components/
│   │   │   │   ├── accordion.tsx
│   │   │   │   ├── alert-dialog.tsx
│   │   │   │   ├── alert.tsx
│   │   │   │   ├── app-sidebar.tsx
│   │   │   │   ├── aspect-ratio.tsx
│   │   │   │   ├── avatar.tsx
│   │   │   │   ├── badge.tsx
│   │   │   │   ├── breadcrumb.tsx
│   │   │   │   ├── button.tsx
│   │   │   │   ├── calendar.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── carousel.tsx
│   │   │   │   ├── chart-area-interactive.tsx
│   │   │   │   ├── chart.tsx
│   │   │   │   ├── checkbox.tsx
│   │   │   │   ├── collapsible.tsx
│   │   │   │   ├── command.tsx
│   │   │   │   ├── context-menu.tsx
│   │   │   │   ├── data-table.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   ├── drawer.tsx
│   │   │   │   ├── dropdown-menu.tsx
│   │   │   │   ├── form.tsx
│   │   │   │   ├── hover-card.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── label.tsx
│   │   │   │   ├── menubar.tsx
│   │   │   │   ├── nav-documents.tsx
│   │   │   │   ├── nav-main.tsx
│   │   │   │   ├── nav-projects.tsx
│   │   │   │   ├── nav-secondary.tsx
│   │   │   │   ├── nav-user.tsx
│   │   │   │   ├── navigation-menu.tsx
│   │   │   │   ├── pagination.tsx
│   │   │   │   ├── popover.tsx
│   │   │   │   ├── progress.tsx
│   │   │   │   ├── radio-group.tsx
│   │   │   │   ├── resizable.tsx
│   │   │   │   ├── scroll-area.tsx
│   │   │   │   ├── section-cards.tsx
│   │   │   │   ├── select.tsx
│   │   │   │   ├── separator.tsx
│   │   │   │   ├── sheet.tsx
│   │   │   │   ├── sidebar.tsx
│   │   │   │   ├── site-header.tsx
│   │   │   │   ├── skeleton.tsx
│   │   │   │   ├── slider.tsx
│   │   │   │   ├── sonner.tsx
│   │   │   │   ├── switch.tsx
│   │   │   │   ├── table.tsx
│   │   │   │   ├── tabs.tsx
│   │   │   │   ├── team-switcher.tsx
│   │   │   │   ├── textarea.tsx
│   │   │   │   ├── toggle-group.tsx
│   │   │   │   ├── toggle.tsx
│   │   │   │   └── tooltip.tsx
│   │   │   ├── hooks/
│   │   │   │   └── use-mobile.ts
│   │   │   ├── lib/
│   │   │   │   └── utils.ts
│   │   │   ├── styles/
│   │   │   │   └── globals.css
│   │   │   └── index.ts    # Barrel file
│   │   ├── components.json
│   │   ├── eslint.config.js
│   │   ├── package.json
│   │   ├── postcss.config.mjs
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── tsconfig.lint.json
│   │
│   ├── eslint-config/      # Shared ESLint preset
│   │   ├── README.md
│   │   ├── base.js
│   │   ├── next.js
│   │   ├── package.json
│   │   └── react-internal.js
│   │
│   └── typescript-config/  # Shared TS-config base
│       ├── README.md
│       ├── base.json
│       ├── nextjs.json
│       ├── package.json
│       └── react-library.json
│
├── MigrationPrompt.md
├── PROJECT_STRUCTURE_RULES.md
├── README.md
├── ReplicatePrompt.md
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.json           # root TS references map
└── turbo.json              # Turborepo pipeline
```

> **Note:** `node_modules/**` and build artefacts are omitted for brevity.

---

## 2. Structural Rules (Must Follow)

1. **Workspaces Layout**  
   • All runnable applications live under `apps/**`.  
   • All reusable, publishable code lives under `packages/**`.  
   • Never import directly between apps. Share via a package inside `packages/**`.

2. **Naming & API Surface**  
   • Packages expose a public barrel (e.g. `packages/ui/src/index.ts`).  
   • React components use *PascalCase* filenames in `components/`; hooks in `hooks/`; utilities in `lib/`.

3. **Import Paths**  
   • Use path aliases (`@workspace/ui`, etc.) defined in `tsconfig`.  
   • Do **not** reach into another package's *src* files directly.

4. **Styling**  
   • Global styles live at `packages/ui/src/styles/globals.css`; apps import via `@workspace/ui/globals.css`.  
   • Component-level styles may be Tailwind classes or CSS-modules; avoid new global CSS.

5. **Shared Configuration**  
   • Updates to ESLint/TS/Prettier go in `packages/eslint-config` or `packages/typescript-config` and are referenced by every workspace.  
   • Do not duplicate config files.

6. **Folder Hygiene**  
   • `.gitkeep` marks intentional empty dirs; remove it once real code exists.  
   • Place test files next to the code they test using the `*.test.ts(x)` pattern.

7. **Turborepo Pipelines**  
   • Each package/app defines `build`, `lint`, `type-check`, `test` scripts aligned with `turbo.json`.  
   • Update `turbo.json` when introducing new pipeline steps.

8. **Dependency Boundaries**  
   • `apps/**` may depend on any `packages/**`.  
   • `packages/ui` may depend only on other packages that **do not** depend back on `ui` (no circular deps).  
   • Config packages must have *no runtime* dependencies.

9. **TypeScript Project References**  
   • New packages/apps **must** be added to root `tsconfig.json` references.  
   • Their own `tsconfig.json` must set `{ "compilerOptions": { "composite": true } }`.

10. **Automation Guard-Rails**  
    • When generating code, verify the target path obeys these rules; otherwise relocate or abort with a clear error.  
    • Remember to update barrels, path aliases, and Turbo/TS references.

---

**Last updated:** CURSOR_TIMESTAMP 