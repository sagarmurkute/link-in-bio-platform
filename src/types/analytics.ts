export interface AnalyticsEvent {
  id: string;
  user_id: string;
  link_id: string | null;
  event_type: "link_click" | "page_view";
  referrer: string | null;
  user_agent: string | null;
  created_at: string;
}
