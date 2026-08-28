# VYB Product Roadmap

## Sequential Phase Sequence

- [x] **00 Brand / Vision**: Defined core product philosophy ("One identity. One place. One link.") and domain `getvyb.vercel.app`.
- [x] **01 GitHub + Vercel**: Repository initialized on GitHub (`sagarmurkute/link-in-bio-platform`) and connected to Vercel.
- [x] **02 Production Next.js Foundation**: Bootstrapped Next.js App Router, TypeScript, Tailwind CSS, Turbopack, and ESLint.
- [x] **03 Database**: Designed PostgreSQL schema (`profiles`, `links`, `analytics_events`) and RLS policies in `supabase/schema.sql`.
- [x] **04 Authentication**: Implemented Supabase Auth (Email/Password & Magic Link) and Server Actions in `src/app/actions/auth.ts`.
- [x] **05 Onboarding**: Built handle selection & account reservation during sign-up.
- [x] **06 Username System**: Enforced unique `@username` registration and reservation checks.
- [x] **07 Profile System**: Created database-backed user profile updating (`display_name`, `bio`, `theme`).
- [x] **08 Link Management**: Built link stack creation, active status toggling, and deletion in `src/app/actions/links.ts`.
- [x] **09 Public Profiles (MVP Target)**: Dynamic route `src/app/[username]/page.tsx` rendering public profile pages at `getvyb.vercel.app/username`.
- [x] **10 Profile Customization**: Theme toggling between Dark Luxury (`#08080A`) and Warm Ivory (`#F4F0EB`).
- [x] **11 Dashboard**: Authenticated user dashboard at `/dashboard` for managing links and settings.
- [x] **12 Content Blocks**: Custom SVG social brand icon rendering for GitHub, Instagram, X, LinkedIn, YouTube, and Web links.
- [x] **13 Analytics**: Real-time link click count tracking and PostgreSQL analytics events.
- [ ] **14 SEO / Sharing**: OpenGraph meta tags, dynamic social share previews, and sitemap generation.
- [ ] **15 Security / Performance**: Rate limiting, security headers, image optimization, and caching.
- [ ] **16 Payments**: Stripe subscription integration for pro accounts.
- [ ] **17 Custom Domains**: Custom domain binding for user pages.
- [ ] **18 Moderation / Admin**: Admin moderation dashboard and handle reporting.
- [ ] **19 API**: Public developer REST & GraphQL API.
- [ ] **20 Ecosystem**: Developer plugins and external platform integrations.
