import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://oxzwvjnklemsshktdvcp.supabase.co';

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94end2am5rbGVtc3Noa3RkdmNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQxNTM4MjksImV4cCI6MjEwOTcyOTgyOX0.A_nV6XFM9lh-j8feKKD0ZmDLY_9fcU6ysX8IHItDr40';

export const isSupabaseConfigured = () =>
  Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
