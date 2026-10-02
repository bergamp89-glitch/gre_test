-- ============================================================
-- GRE Quiz Platform — Supabase Jadvallari
-- 1 ta Supabase bazasida 2 ta loyihani to'liq alohida saqlash uchun.
-- Supabase -> SQL Editor ga quyidagi kodni qo'yib, "Run" tugmasini bosing:
-- ============================================================

-- ========================
-- 1. gre_settings jadvali
-- ========================
CREATE TABLE IF NOT EXISTS gre_settings (
  key text PRIMARY KEY,
  value jsonb NOT NULL
);

INSERT INTO gre_settings (key, value) VALUES 
('admin_creds', '{"firstName": "admin", "lastName": "Doe", "email": "0807"}')
ON CONFLICT (key) DO NOTHING;

ALTER TABLE gre_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "gre_settings_anon_read" ON gre_settings;
CREATE POLICY "gre_settings_anon_read" ON gre_settings FOR SELECT USING (true);

DROP POLICY IF EXISTS "gre_settings_anon_write" ON gre_settings;
CREATE POLICY "gre_settings_anon_write" ON gre_settings FOR ALL USING (true) WITH CHECK (true);


-- ========================
-- 2. gre_exam_sessions jadvali
-- ========================
CREATE TABLE IF NOT EXISTS gre_exam_sessions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text,
  questions jsonb,
  current_index integer DEFAULT 0,
  app_state text,
  registration jsonb,
  updated_at timestamp with time zone DEFAULT now()
);

ALTER TABLE gre_exam_sessions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "gre_exam_sessions_anon_read" ON gre_exam_sessions;
CREATE POLICY "gre_exam_sessions_anon_read" ON gre_exam_sessions FOR SELECT USING (true);

DROP POLICY IF EXISTS "gre_exam_sessions_anon_write" ON gre_exam_sessions;
CREATE POLICY "gre_exam_sessions_anon_write" ON gre_exam_sessions FOR ALL USING (true) WITH CHECK (true);


-- ========================
-- 3. gre_requests jadvali (Foydalanuvchi so'rovlari)
-- ========================
CREATE TABLE IF NOT EXISTS gre_requests (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  "firstName" text,
  "lastName" text,
  email text,
  level text DEFAULT 'GRE - Graduate Record Examination',
  photo text,
  descriptor jsonb,
  status text DEFAULT 'pending',
  created_at timestamp with time zone DEFAULT now()
);

ALTER TABLE gre_requests ADD COLUMN IF NOT EXISTS photo text;
ALTER TABLE gre_requests ADD COLUMN IF NOT EXISTS descriptor jsonb;

ALTER TABLE gre_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "gre_requests_anon_read" ON gre_requests;
CREATE POLICY "gre_requests_anon_read" ON gre_requests FOR SELECT USING (true);

DROP POLICY IF EXISTS "gre_requests_anon_write" ON gre_requests;
CREATE POLICY "gre_requests_anon_write" ON gre_requests FOR ALL USING (true) WITH CHECK (true);


-- ========================
-- 4. gre_leaderboard jadvali (Natijalar jadvali)
-- ========================
CREATE TABLE IF NOT EXISTS gre_leaderboard (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  username text,
  level_num integer DEFAULT 1,
  score integer,
  created_at timestamp with time zone DEFAULT now()
);

ALTER TABLE gre_leaderboard ADD COLUMN IF NOT EXISTS level_num integer DEFAULT 1;

ALTER TABLE gre_leaderboard ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "gre_leaderboard_anon_read" ON gre_leaderboard;
CREATE POLICY "gre_leaderboard_anon_read" ON gre_leaderboard FOR SELECT USING (true);

DROP POLICY IF EXISTS "gre_leaderboard_anon_write" ON gre_leaderboard;
CREATE POLICY "gre_leaderboard_anon_write" ON gre_leaderboard FOR ALL USING (true) WITH CHECK (true);


-- ========================
-- 5. gre_questions jadvali (Savollar bazasi)
-- ========================
CREATE TABLE IF NOT EXISTS gre_questions (
  id bigint PRIMARY KEY,
  level_num integer DEFAULT 1,
  type text,
  prompt text,
  data jsonb,
  created_at timestamp with time zone DEFAULT now()
);

ALTER TABLE gre_questions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "gre_questions_anon_read" ON gre_questions;
CREATE POLICY "gre_questions_anon_read" ON gre_questions FOR SELECT USING (true);

DROP POLICY IF EXISTS "gre_questions_anon_write" ON gre_questions;
CREATE POLICY "gre_questions_anon_write" ON gre_questions FOR ALL USING (true) WITH CHECK (true);

