// ─────────────────────────────────────────────────────────
// SUPABASE CONFIG — yahan apna Project URL aur anon key daalo
// Supabase dashboard → Project Settings → API mein milega
// ─────────────────────────────────────────────────────────
const SUPABASE_URL = "https://YOUR-PROJECT-REF.supabase.co";
const SUPABASE_ANON_KEY = "YOUR-ANON-PUBLIC-KEY";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
