import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://aerfhtlkbhpbhzenozhk.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlcmZodGxrYmhwYmh6ZW5vemhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0NjI4NDUsImV4cCI6MjA1NTAzODg0NX0.GVG-z_DM7Fw_9OrpGu1vf-8OD5jTe2SdX98R2tag9P8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
