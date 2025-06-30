import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://frwpqsatqofhxvqhgthq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyd3Bxc2F0cW9maHh2cWhndGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MTIyNzksImV4cCI6MjA2NTI4ODI3OX0.Jmi58w6he869THAVYb9qoRdIBoPDoxp3pfjJeeY-bwQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
