import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key'

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn("⚠️ DIQQAT: Supabase kalitlari (.env) kiritilmagan. Iltimos .env faylida VITE_SUPABASE_URL va VITE_SUPABASE_ANON_KEY ni to'ldiring.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 1 ta Supabase bazasida 2 ta alohida loyihani saqlash uchun jadvallar prefiksi:
export const TABLES = {
  REQUESTS: 'gre_requests',
  LEADERBOARD: 'gre_leaderboard',
  EXAM_SESSIONS: 'gre_exam_sessions',
  SETTINGS: 'gre_settings',
  QUESTIONS: 'gre_questions'
}

