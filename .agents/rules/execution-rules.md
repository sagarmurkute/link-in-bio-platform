# Antigravity Execution Rules for VYB

## Rule 1 — One Phase at a Time
Do not attempt to build VYB completely in one task. Follow the sequence:
`Phase N → Verify → Phase N+1 → Verify`

## Rule 2 — Never Silently Change the Stack
The approved production stack is:
- **Framework**: Next.js (App Router)
- **UI**: React + Tailwind CSS + shadcn/ui + Motion
- **Language**: TypeScript
- **Database & Auth**: Supabase PostgreSQL + Supabase Auth + Supabase Storage
- **Validation & Forms**: Zod + React Hook Form
- **Drag & Drop**: dnd-kit
- **Hosting & Analytics**: Vercel + Vercel Analytics + Custom PostgreSQL Event System
- **Testing & Code Quality**: Vitest + Playwright + ESLint + Prettier
- **Payments & Email**: Stripe + Resend
- **Repository**: GitHub (`sagarmurkute/link-in-bio-platform`)

If a major technology needs to change, stop and explain why to the user.

## Rule 3 — Don't Build Future Features Early
Especially: API, Custom domains, Payments, Advanced blocks, Mobile apps.
Don't let future features contaminate the MVP architecture unnecessarily.

## Rule 4 — Every Phase Must Be Functional
Don't just create dummy UI.
- Authentication phase = actual authentication
- Profile phase = actual database-backed profiles
- Public profile phase = another browser/device can actually open the page (`getvyb.vercel.app/username`)

## Rule 5 — Test After Every Major Feature
At minimum: `npm run lint` and `npm run build` and appropriate automated/manual tests.

## Rule 6 — Commit After Stable Milestones
Use meaningful commit conventions:
- `feat: add authentication`
- `feat: add username onboarding`
- `feat: add profile system`
- `feat: add link management`
- `feat: add public profiles`
- `feat: add themes`
- `feat: add analytics`

## Rule 7 — Never Destroy Working Functionality
Every new phase must preserve previously completed functionality.

## Rule 8 — Document Decisions
Keep the `docs/` directory updated:
```
docs/
├── architecture.md
├── database.md
├── roadmap.md
├── design-system.md
└── decisions/
```

---

## Project Roadmap Phases

- `00` Brand / Vision
- `01` GitHub + Vercel
- `02` Production Next.js foundation
- `03` Database
- `04` Authentication
- `05` Onboarding
- `06` Username system
- `07` Profile system
- `08` Link management
- `09` **Public profiles (MVP Target)**
- `10` Profile customization
- `11` Dashboard
- `12` Content blocks
- `13` Analytics
- `14` SEO / sharing
- `15` Security / performance
- `16` Payments
- `17` Custom domains
- `18` Moderation / admin
- `19` API
- `20` Ecosystem
