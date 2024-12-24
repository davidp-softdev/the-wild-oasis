import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zcvpdtlofeqnyfksxwzu.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjdnBkdGxvZmVxbnlma3N4d3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2OTA0MzUsImV4cCI6MjA1MDI2NjQzNX0.IIh3-pGHkgdBHEL8MBqzXB9CQxUFuUee8mOOnpX57Ts";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
