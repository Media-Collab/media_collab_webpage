import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://bekxwbpchxniuguqlnni.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJla3h3YnBjaHhuaXVndXFsbm5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwNjQ5ODQsImV4cCI6MjAwNTY0MDk4NH0.krCHeCq5mkcuRpm7vtmPqFnG3mbQIvBeFmtpCellPmg";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
