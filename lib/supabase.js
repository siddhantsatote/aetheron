import { createClient } from "@supabase/supabase-js";

let _supabase = null;

export function getSupabase() {
  if (_supabase) return _supabase;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || url === "your_supabase_url" || !key || key === "your_supabase_anon_key") {
    throw new Error(
      "Supabase not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local"
    );
  }

  _supabase = createClient(url, key);
  return _supabase;
}
