# VYB System Architecture & Page Map

## Architecture Overview

VYB is built using Next.js App Router, leveraging Server Components, Client Components, and Next.js Server Actions for full-stack data mutations.

```
                  ┌───────────────────────────────┐
                  │       Vercel Edge Network     │
                  └───────────────┬───────────────┘
                                  │
                  ┌───────────────▼───────────────┐
                  │       Next.js App Router      │
                  │  (Server Actions & Handlers)  │
                  └───────────────┬───────────────┘
                                  │
                  ┌───────────────▼───────────────┐
                  │    Supabase PostgreSQL & Auth │
                  │  (profiles, links, analytics) │
                  └───────────────────────────────┘
```

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

## Directory Map

```
VYB/
├── .agents/
│   └── rules/
│       └── execution-rules.md     # Antigravity Execution Rules
├── docs/
│   ├── vision.md                  # Product Vision & Philosophy
│   ├── roadmap.md                 # 20-Phase Roadmap
│   ├── architecture.md            # System Architecture & Page Map
│   ├── database.md                # Database Schema & RLS
│   ├── design-system.md           # Tokens & Theme Specification
│   ├── security.md                # Security Protocols & RLS
│   └── decisions/                 # Architectural Decision Records
├── src/
│   ├── app/
│   │   ├── (marketing)/           # Landing page, Manifesto, Pricing, About
│   │   ├── (auth)/                # Login, Signup, Password Recovery
│   │   ├── (dashboard)/           # Dashboard, Editor, Analytics, Settings
│   │   ├── [username]/            # Dynamic public link page
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── profile/               # ProfileHeader, ProfileLinks, ProfileFooter
│   │   ├── marketing/
│   │   ├── auth/
│   │   └── dashboard/
│   ├── config/                    # Site & Navigation configuration
│   └── types/                     # TypeScript interfaces
└── supabase/
    └── schema.sql                 # PostgreSQL migration script
```
