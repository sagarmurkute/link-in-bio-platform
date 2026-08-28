# VYB — Full Product Roadmap & Specification

## Product Definition

VYB is an account-based personal identity and link-in-bio platform.

```
Create VYB account ──> Choose username ──> Create profile ──> Add links/content ──> Customize appearance ──> Publish ──> getvyb.vercel.app/username
```

The public profile (`getvyb.vercel.app/username`) is the core product.

---

## Complete Phase Sequence

### PHASE 0 — Product & Repository Foundation
- **Goal**: Establish project foundation before development.
- **Tasks**: Branding, visual direction, GitHub repo, Vercel deployment, env strategy, code quality, branch strategy, documentation.
- **Status**: Completed ✓

### PHASE 1 — VYB Brand & Marketing
- **Goal**: Establish public presence and brand identity (*"One identity. One place. One link."*).
- **Deliverables**: Announcement page, manifesto, carousel, design tokens, color palette.
- **Status**: Completed ✓

### PHASE 2 — Production Application Foundation
- **Goal**: Transition prototype into production Next.js App Router application.
- **Stack**: Next.js, React, TypeScript, Tailwind CSS, Motion, Supabase, Vercel.
- **Status**: Completed ✓

### PHASE 3 — Database Architecture
- **Goal**: Establish relational PostgreSQL schema on Supabase (`profiles`, `links`, `analytics_events`) with Row Level Security (RLS).
- **Status**: Completed ✓

### PHASE 4 — Authentication
- **Goal**: Users can securely register, login, sign out, and manage sessions using Supabase Auth & Zod validation.
- **Status**: Completed ✓

### PHASE 5 — User Onboarding & Username System
- **Goal**: Seamless username selection with strict availability, case normalization, and reserved path protection.
- **Reserved Handles**: `admin`, `api`, `login`, `signup`, `dashboard`, `settings`, `help`, `about`, `pricing`, `manifesto`, `auth`, `public`, `legacy`, `terms`, `privacy`, `docs`, `support`.
- **Status**: Completed ✓

### PHASE 6 — Profile System
- **Goal**: Core personal profile engine (Avatar, Display Name, Bio, Links Stack).
- **Features**: Add, edit, delete, toggle active status, and reorder links using `@dnd-kit`.
- **Status**: Completed ✓

### PHASE 7 — Public Profile Engine
- **Goal**: Make public profiles accessible at `getvyb.vercel.app/username`.
- **Architecture**: Shared PostgreSQL single source of truth between Dashboard and Public Pages.
- **Status**: Completed ✓

### PHASE 8 — Profile Customization
- **Goal**: Preset theme customization (Dark Luxury `#08080A` and Warm Ivory `#F4F0EB`).
- **Status**: Completed ✓

### PHASE 9 — Dashboard (MVP Milestone Target)
- **Goal**: Complete user control center with live link stack editor, quick actions, analytics overview, and live preview link.
- **Status**: Completed ✓ (MVP Achieved)

---

### Upcoming Enhancement Phases

### PHASE 10 — Content & Block Expansion
- **Goal**: Extend profile capabilities beyond links (Heading, Text, Image, Video, YouTube, Spotify, Portfolio, Email signup).

### PHASE 11 — Advanced Analytics
- **Goal**: Comprehensive product insights (Page views, link CTR, referrers, device breakdown, top performing destinations).

### PHASE 12 — SEO & Social Sharing
- **Goal**: OpenGraph dynamic image generation, Twitter/X card metadata, custom SEO descriptions, and sitemaps.

### PHASE 13 — Performance & Security Hardening
- **Goal**: Rate limiting, URL validation, XSS protection, CSRF headers, image optimization, and caching.

### PHASE 14 — Monetization & Payments
- **Goal**: Stripe subscription integration for Pro plans (advanced themes, custom fonts, analytics, zero VYB branding).

### PHASE 15 — Custom Domains
- **Goal**: Custom domain mapping (e.g. `sagar.design` or `links.sagar.design`) via Vercel Edge routing and SSL provisioning.

### PHASE 16 — Moderation & Trust
- **Goal**: Profile reporting, link abuse blocking, admin moderation dashboard, and automated spam prevention.

### PHASE 17 — Public Developer API
- **Goal**: Public REST API (`GET /api/v1/profiles/:username`) and API key management.

### PHASE 18 — Ecosystem
- **Goal**: Developer SDKs, webhooks, embeddable VYB profile widgets, extensions, and mobile companion apps.

---

## System Architecture Overview

```
                         VYB Platform
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
    Marketing            Application            Public Web
        │                     │                     │
   Landing Page          Dashboard             /username
   Manifesto             Link Stack Editor
   Pricing               Analytics & Settings
                              │
                              ▼
                         Next.js App
                              │
             ┌────────────────┼────────────────┐
             │                │                │
           Auth           PostgreSQL        Storage
             │                │                │
             └────────────────┼────────────────┘
                              │
                           Supabase
                              │
             ┌────────────────┼────────────────┐
             │                │                │
          Analytics        Payments          Email
                            Stripe           Resend
                              │
                           Vercel
```
