import { createClient } from "@supabase/supabase-js";

// 1. project url
const SUPABASE_PROJECT_URL = "https://wzpbiaapmfihpfghixaz.supabase.co";

// 2. anon key
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6cGJpYWFwbWZpaHBmZ2hpeGF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzNDA0NzYsImV4cCI6MjAzMTkxNjQ3Nn0.HAq1pxJzpo4xl84_7Q1UkP1JEpv__eHdBEdKveWTT6w";

const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);

export default supabase;
