# VYB Security Specification

## Security Measures & Protocols

1. **Row Level Security (RLS)**:
   - Enforced on all Supabase PostgreSQL tables (`profiles`, `links`, `analytics_events`).
   - Public read access for published profiles and active links.
   - Restricted write/update access strictly scoped to authenticated owners (`auth.uid() = user_id`).

2. **Reserved Handle Protection**:
   - Validation against platform paths (`admin`, `api`, `login`, `signup`, `dashboard`, `settings`, `help`, `about`, `pricing`, `manifesto`, `auth`, `public`, `legacy`, `terms`, `privacy`, `docs`, `support`).

3. **Input Sanitization & Validation**:
   - All server actions validated using Zod schemas.
   - Strict regex checks on usernames (`/^[a-zA-Z0-9_]{3,20}$/`).

4. **Protected Dashboard Routes**:
   - Server-side session verification via `@supabase/ssr` middleware.
