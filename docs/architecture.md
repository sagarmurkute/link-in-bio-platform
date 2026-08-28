# VYB System Architecture

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

## Directory Map

```
VYB/
├── .agents/
│   └── rules/
│       └── execution-rules.md     # Antigravity Execution Rules
├── docs/
│   ├── architecture.md            # System Architecture
│   ├── database.md                # Database Schema & RLS
│   ├── roadmap.md                 # 20-Phase Roadmap
│   ├── design-system.md           # Tokens & Theme Specification
│   └── decisions/                 # Architectural Decision Records
├── public/
│   └── legacy/                    # Static site archive
├── src/
│   ├── app/
│   │   ├── [username]/page.tsx    # Dynamic public link page
│   │   ├── actions/               # Server Actions (auth, links, analytics)
│   │   ├── auth/callback/         # Auth token exchange callback
│   │   ├── dashboard/page.tsx     # Authenticated user dashboard
│   │   ├── login/page.tsx         # Sign in & sign up page
│   │   ├── manifesto/page.tsx     # Editorial manifesto page
│   │   ├── globals.css            # Luxury design tokens & rules
│   │   └── page.tsx               # Announcement hero page
│   ├── components/                # React UI components
│   ├── lib/
│   │   └── supabase/              # Browser & server Supabase clients
│   └── types/
│       └── database.ts            # TypeScript interfaces
└── supabase/
    └── schema.sql                 # PostgreSQL migration script
```
