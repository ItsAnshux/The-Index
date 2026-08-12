// ─────────────────────────────────────────────────────────
// SUPABASE CONFIG — yahan apna Project URL aur anon key daalo
// Supabase dashboard → Project Settings → API mein milega
// ─────────────────────────────────────────────────────────
const SUPABASE_URL = "https://zaxdneizwwkasbajqmyl.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_OgqQy1Zf-GDrFeJ251cj2A_fQ9ar29f";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
