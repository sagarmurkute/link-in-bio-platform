# VYB System Architecture & Master Page Map

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

## Master Route Hierarchy

```
VYB
│
├── PUBLIC / MARKETING
│   ├── /                         (Home / Claim Bar) [Active]
│   ├── /manifesto                (Editorial Manifesto) [Active]
│   ├── /about                    (About Platform) [Planned]
│   ├── /pricing                  (Pro Tier Plans) [Planned]
│   ├── /features                 (Feature Showcase) [Planned]
│   ├── /changelog                (Platform Updates) [Planned]
│   └── /contact                  (Support Contact) [Planned]
│
├── AUTHENTICATION
│   ├── /login                    (Sign In) [Active]
│   ├── /signup                   (Register & Claim Handle) [Active]
│   ├── /forgot-password          (Password Recovery Request) [Planned]
│   ├── /reset-password           (Password Reset Handler) [Planned]
│   └── /verify-email             (Email Verification) [Planned]
│
├── ONBOARDING
│   ├── /onboarding               (Step 1: Welcome) [Planned]
│   ├── /onboarding/username      (Step 2: Choose Username) [Planned]
│   ├── /onboarding/profile       (Step 3: Avatar & Bio) [Planned]
│   ├── /onboarding/links         (Step 4: Initial Links) [Planned]
│   ├── /onboarding/appearance    (Step 5: Theme Selection) [Planned]
│   └── /onboarding/complete      (Step 6: Completion & Publish) [Planned]
│
├── USER DASHBOARD
│   ├── /dashboard                (Dashboard Overview) [Active]
│   ├── /dashboard/profile        (Profile Information) [Planned]
│   ├── /dashboard/links          (Link Management Stack) [Planned]
│   ├── /dashboard/appearance     (Theme Customizer) [Planned]
│   ├── /dashboard/analytics      (Traffic & Click Metrics) [Planned]
│   └── /dashboard/settings       (Dashboard Quick Settings) [Planned]
│
├── PROFILE EDITOR
│   └── /editor                   (Interactive Live Profile Builder) [Active]
│
├── SETTINGS
│   ├── /settings                 (General Account Settings) [Active]
│   ├── /settings/account         (Account Preferences) [Planned]
│   ├── /settings/profile         (Profile Information) [Planned]
│   ├── /settings/security        (Security & Passwords) [Planned]
│   ├── /settings/notifications   (Notification Preferences) [Planned]
│   ├── /settings/billing         (Subscriptions & Invoices) [Planned]
│   └── /settings/danger-zone     (Delete Account & Export) [Planned]
│
├── PUBLIC USER PROFILES
│   └── /[username]               (Dynamic Public VYB Engine) [Active]
│
├── LEGAL
│   ├── /privacy                  (Privacy Policy) [Planned]
│   ├── /terms                    (Terms of Service) [Planned]
│   ├── /cookies                  (Cookie Policy) [Planned]
│   └── /acceptable-use           (Acceptable Use Policy) [Planned]
│
└── ADMIN
    ├── /admin                    (Admin Overview) [Planned]
    ├── /admin/users              (User Management) [Planned]
    ├── /admin/profiles           (Profile Moderation) [Planned]
    ├── /admin/reports            (Reported Handles) [Planned]
    ├── /admin/analytics          (System Metrics) [Planned]
    └── /admin/settings           (Platform Configuration) [Planned]
```

## Directory Map

```
VYB/
├── .agents/
│   └── rules/
│       └── execution-rules.md     # Antigravity Execution Rules
├── docs/
│   ├── vision.md                  # Product Vision & Philosophy
│   ├── roadmap.md                 # 20-Phase Roadmap
│   ├── architecture.md            # System Architecture & Master Route Hierarchy
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
