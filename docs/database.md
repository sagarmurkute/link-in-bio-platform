# Supabase PostgreSQL Database Specification

## PostgreSQL Tables

### `public.profiles`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `UUID` | Primary Key, `REFERENCES auth.users(id)` | User auth ID |
| `username` | `TEXT` | `UNIQUE NOT NULL` | Custom handle (e.g. `sagar`) |
| `display_name` | `TEXT` | Optional | User display name |
| `bio` | `TEXT` | Optional | Profile bio |
| `avatar_url` | `TEXT` | Optional | Profile image URL |
| `theme` | `TEXT` | Default `'dark'` | Theme preference (`dark` / `light`) |
| `created_at` | `TIMESTAMPTZ` | `DEFAULT NOW()` | Account creation timestamp |
| `updated_at` | `TIMESTAMPTZ` | `DEFAULT NOW()` | Profile update timestamp |

### `public.links`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `UUID` | Primary Key, `DEFAULT gen_random_uuid()` | Link ID |
| `user_id` | `UUID` | `REFERENCES public.profiles(id)` | Link owner ID |
| `title` | `TEXT` | `NOT NULL` | Display title |
| `url` | `TEXT` | `NOT NULL` | Destination URL |
| `icon` | `TEXT` | Optional | Icon key (`github`, `instagram`, etc.) |
| `position` | `INT` | `DEFAULT 0` | Sort position order |
| `is_active` | `BOOLEAN` | `DEFAULT TRUE` | Visibility flag |
| `click_count` | `INT` | `DEFAULT 0` | Total click counter |
| `created_at` | `TIMESTAMPTZ` | `DEFAULT NOW()` | Creation timestamp |

### `public.analytics_events`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `UUID` | Primary Key, `DEFAULT gen_random_uuid()` | Event ID |
| `user_id` | `UUID` | `REFERENCES public.profiles(id)` | Page owner ID |
| `link_id` | `UUID` | `REFERENCES public.links(id)` | Clicked link ID |
| `event_type` | `TEXT` | `NOT NULL` | Event type (`link_click`, `page_view`) |
| `referrer` | `TEXT` | Optional | Traffic referrer |
| `user_agent` | `TEXT` | Optional | Visitor user agent |
| `created_at` | `TIMESTAMPTZ` | `DEFAULT NOW()` | Timestamp |
