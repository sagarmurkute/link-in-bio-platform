export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Profile {
  id: string;
  username: string;
  display_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  theme: "dark" | "light" | string;
  created_at: string;
  updated_at: string;
}

export interface LinkItem {
  id: string;
  user_id: string;
  title: string;
  url: string;
  icon: string | null;
  position: number;
  is_active: boolean;
  click_count: number;
  created_at: string;
}

export interface AnalyticsEvent {
  id: string;
  user_id: string;
  link_id: string | null;
  event_type: "page_view" | "link_click";
  referrer: string | null;
  user_agent: string | null;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, "created_at" | "updated_at"> & {
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Omit<Profile, "id">>;
      };
      links: {
        Row: LinkItem;
        Insert: Omit<LinkItem, "id" | "click_count" | "created_at"> & {
          id?: string;
          click_count?: number;
          created_at?: string;
        };
        Update: Partial<Omit<LinkItem, "id" | "user_id">>;
      };
      analytics_events: {
        Row: AnalyticsEvent;
        Insert: Omit<AnalyticsEvent, "id" | "created_at"> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Omit<AnalyticsEvent, "id">>;
      };
    };
  };
}
