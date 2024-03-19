import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cvgvnkcsrpnnqqnnxerq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2Z3Zua2NzcnBubnFxbm54ZXJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2MzYyMjksImV4cCI6MjAyNjIxMjIyOX0.MKqi8T1J31ZMUYrHuoygBYRAqlHg0t4qsZG2FPlk1K8";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
