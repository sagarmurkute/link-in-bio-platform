# ADR 001 — Technology Stack & Architecture Decisions

- **Status**: Approved
- **Date**: 2026-08-28

## Context
VYB is an account-based link-in-bio platform designed to unify scattered online identities under custom handles (`getvyb.vercel.app/username`).

## Approved Production Stack

| Layer | Technology | Decision & Rationale |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | Server Components for instant initial HTML & Server Actions for mutations |
| **UI** | React + Tailwind CSS | Vanilla web standards with utility classes and custom CSS tokens |
| **Language** | TypeScript | Strict type safety for data models and API contracts |
| **Database & Auth** | Supabase PostgreSQL + Auth | Managed PostgreSQL database with RLS policies and built-in Auth |
| **Form & Validation** | React Hook Form + Zod | Schema validation for username reservations and authentication |
| **Drag & Drop** | `@dnd-kit` | Reordering links stack in the user dashboard |
| **Icons** | Lucide React + Inline SVGs | Scalable vector icons for social media and navigation |
| **Hosting** | Vercel | Global edge deployment, fast TTFB, and Vercel Analytics |

## Page Map & Route Architecture

| Route | Route Group | Description | Status |
| :--- | :--- | :--- | :--- |
| `/` | `(marketing)` | VYB Home / Hero Page & Claim Bar | Active |
| `/manifesto` | `(marketing)` | Philosophy & Editorial Manifesto | Active |
| `/pricing` | `(marketing)` | Plan Tiers & Pro Features | Planned |
| `/about` | `(marketing)` | About VYB Platform | Planned |
| `/login` | `(auth)` | User Authentication & Sign In | Active |
| `/signup` | `(auth)` | Account Registration & Handle Claim | Active |
| `/forgot-password` | `(auth)` | Password Reset Request | Planned |
| `/reset-password` | `(auth)` | Password Reset Token Handler | Planned |
| `/dashboard` | `(dashboard)` | Control Center & Profile Overview | Active |
| `/editor` | `(dashboard)` | Interactive Profile Builder & Link Stack Manager | Active |
| `/analytics` | `(dashboard)` | Profile Views & Link Click Insights | Active |
| `/settings` | `(dashboard)` | User Account & Handle Settings | Active |
| `/[username]` | Public Handle | Dynamic Public Profile Engine (`getvyb.vercel.app/username`) | Active |
| `/api/*` | Developer API | Public & Private Platform Endpoints | Planned |

## Rules Enforced
1. Build phase by phase with verification after each milestone.
2. Never silently change the technology stack.
3. Keep future features (custom domains, payments) out of MVP scope.
4. Maintain `docs/` documentation directory.
