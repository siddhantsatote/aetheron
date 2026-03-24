-- ============================================
-- AETHERON TECH FEST — Supabase Database Schema
-- Run this in Supabase SQL Editor
-- ============================================

-- Ideathon registrations
CREATE TABLE IF NOT EXISTS ideathon_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  college TEXT NOT NULL,
  team_name TEXT NOT NULL,
  team_size INTEGER NOT NULL CHECK (team_size BETWEEN 1 AND 3),
  idea_title TEXT NOT NULL,
  problem_statement TEXT NOT NULL,
  domain TEXT NOT NULL,
  team_members TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Hackathon registrations
CREATE TABLE IF NOT EXISTS hackathon_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  college TEXT NOT NULL,
  team_name TEXT NOT NULL,
  team_size INTEGER NOT NULL CHECK (team_size = 6),
  girl_member_confirm BOOLEAN NOT NULL DEFAULT false,
  project_idea TEXT,
  team_members TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- eSports registrations (Squad only)
CREATE TABLE IF NOT EXISTS esports_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  college TEXT NOT NULL,
  bgmi_uid TEXT NOT NULL,
  ign TEXT NOT NULL,
  device_type TEXT NOT NULL,
  participation_type TEXT NOT NULL DEFAULT 'Squad',
  team_name TEXT NOT NULL,
  squad_igns TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog Writing registrations
CREATE TABLE IF NOT EXISTS blog_writing_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  college TEXT NOT NULL,
  branch_year TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  domain TEXT NOT NULL,
  blog_title TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Flyer Making registrations
CREATE TABLE IF NOT EXISTS flyer_making_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  branch_year TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Reel Making registrations
CREATE TABLE IF NOT EXISTS reel_making_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  instagram_id TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tech Treasure Hunt registrations
CREATE TABLE IF NOT EXISTS tech_treasure_hunt_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  team_size INTEGER NOT NULL CHECK (team_size BETWEEN 2 AND 4),
  team_members TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE ideathon_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE hackathon_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE esports_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_writing_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE flyer_making_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE reel_making_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE tech_treasure_hunt_registrations ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon key (public registrations)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'ideathon_registrations'
      AND policyname = 'Allow public insert ideathon'
  ) THEN
    CREATE POLICY "Allow public insert ideathon" ON ideathon_registrations FOR INSERT WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'hackathon_registrations'
      AND policyname = 'Allow public insert hackathon'
  ) THEN
    CREATE POLICY "Allow public insert hackathon" ON hackathon_registrations FOR INSERT WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'esports_registrations'
      AND policyname = 'Allow public insert esports'
  ) THEN
    CREATE POLICY "Allow public insert esports" ON esports_registrations FOR INSERT WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'blog_writing_registrations'
      AND policyname = 'Allow public insert blog writing'
  ) THEN
    CREATE POLICY "Allow public insert blog writing" ON blog_writing_registrations FOR INSERT WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'flyer_making_registrations'
      AND policyname = 'Allow public insert flyer making'
  ) THEN
    CREATE POLICY "Allow public insert flyer making" ON flyer_making_registrations FOR INSERT WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'reel_making_registrations'
      AND policyname = 'Allow public insert reel making'
  ) THEN
    CREATE POLICY "Allow public insert reel making" ON reel_making_registrations FOR INSERT WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'tech_treasure_hunt_registrations'
      AND policyname = 'Allow public insert tech treasure hunt'
  ) THEN
    CREATE POLICY "Allow public insert tech treasure hunt" ON tech_treasure_hunt_registrations FOR INSERT WITH CHECK (true);
  END IF;
END $$;

-- Allow select for count endpoint (read-only via anon key)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'ideathon_registrations'
      AND policyname = 'Allow public read ideathon'
  ) THEN
    CREATE POLICY "Allow public read ideathon" ON ideathon_registrations FOR SELECT USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'hackathon_registrations'
      AND policyname = 'Allow public read hackathon'
  ) THEN
    CREATE POLICY "Allow public read hackathon" ON hackathon_registrations FOR SELECT USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'esports_registrations'
      AND policyname = 'Allow public read esports'
  ) THEN
    CREATE POLICY "Allow public read esports" ON esports_registrations FOR SELECT USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'blog_writing_registrations'
      AND policyname = 'Allow public read blog writing'
  ) THEN
    CREATE POLICY "Allow public read blog writing" ON blog_writing_registrations FOR SELECT USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'flyer_making_registrations'
      AND policyname = 'Allow public read flyer making'
  ) THEN
    CREATE POLICY "Allow public read flyer making" ON flyer_making_registrations FOR SELECT USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'reel_making_registrations'
      AND policyname = 'Allow public read reel making'
  ) THEN
    CREATE POLICY "Allow public read reel making" ON reel_making_registrations FOR SELECT USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'tech_treasure_hunt_registrations'
      AND policyname = 'Allow public read tech treasure hunt'
  ) THEN
    CREATE POLICY "Allow public read tech treasure hunt" ON tech_treasure_hunt_registrations FOR SELECT USING (true);
  END IF;
END $$;

-- ============================================
-- Migration-safe updates for existing tables
-- ============================================

-- Ideathon: enforce team size 1-3
DO $$
BEGIN
  ALTER TABLE ideathon_registrations
    DROP CONSTRAINT IF EXISTS ideathon_team_size_check;

  ALTER TABLE ideathon_registrations
    ADD CONSTRAINT ideathon_team_size_check
    CHECK (team_size BETWEEN 1 AND 3) NOT VALID;
EXCEPTION
  WHEN undefined_table THEN
    NULL;
END $$;

-- Tech Treasure Hunt: add required fields for compatibility with existing tables
DO $$
BEGIN
  ALTER TABLE tech_treasure_hunt_registrations
    ADD COLUMN IF NOT EXISTS team_size INTEGER;

  ALTER TABLE tech_treasure_hunt_registrations
    ADD COLUMN IF NOT EXISTS team_members TEXT;

  ALTER TABLE tech_treasure_hunt_registrations
    DROP CONSTRAINT IF EXISTS tech_treasure_hunt_team_size_check;

  ALTER TABLE tech_treasure_hunt_registrations
    ADD CONSTRAINT tech_treasure_hunt_team_size_check
    CHECK (team_size BETWEEN 2 AND 4) NOT VALID;

  ALTER TABLE tech_treasure_hunt_registrations
    ALTER COLUMN team_size SET NOT NULL;

  ALTER TABLE tech_treasure_hunt_registrations
    ALTER COLUMN team_members SET NOT NULL;
EXCEPTION
  WHEN undefined_table THEN
    NULL;
END $$;

-- Reel Making: add required fields for compatibility with existing tables
DO $$
BEGIN
  ALTER TABLE reel_making_registrations
    ADD COLUMN IF NOT EXISTS instagram_id TEXT;

  ALTER TABLE reel_making_registrations
    ALTER COLUMN full_name SET NOT NULL;

  ALTER TABLE reel_making_registrations
    ALTER COLUMN email SET NOT NULL;

  ALTER TABLE reel_making_registrations
    ALTER COLUMN instagram_id SET NOT NULL;

  ALTER TABLE reel_making_registrations
    ALTER COLUMN phone SET NOT NULL;
EXCEPTION
  WHEN undefined_table THEN
    NULL;
END $$;

-- Flyer Making: add required fields for compatibility with existing tables
DO $$
BEGIN
  ALTER TABLE flyer_making_registrations
    ADD COLUMN IF NOT EXISTS branch_year TEXT;

  ALTER TABLE flyer_making_registrations
    ALTER COLUMN full_name SET NOT NULL;

  ALTER TABLE flyer_making_registrations
    ALTER COLUMN branch_year SET NOT NULL;

  ALTER TABLE flyer_making_registrations
    ALTER COLUMN phone SET NOT NULL;

  ALTER TABLE flyer_making_registrations
    ALTER COLUMN email SET NOT NULL;
EXCEPTION
  WHEN undefined_table THEN
    NULL;
END $$;

-- Blog Writing: add required fields for compatibility with existing tables
DO $$
BEGIN
  ALTER TABLE blog_writing_registrations
    ADD COLUMN IF NOT EXISTS branch_year TEXT;

  ALTER TABLE blog_writing_registrations
    ADD COLUMN IF NOT EXISTS domain TEXT;

  ALTER TABLE blog_writing_registrations
    ADD COLUMN IF NOT EXISTS blog_title TEXT;

  ALTER TABLE blog_writing_registrations
    ALTER COLUMN full_name SET NOT NULL;

  ALTER TABLE blog_writing_registrations
    ALTER COLUMN college SET NOT NULL;

  ALTER TABLE blog_writing_registrations
    ALTER COLUMN phone SET NOT NULL;

  ALTER TABLE blog_writing_registrations
    ALTER COLUMN email SET NOT NULL;

  ALTER TABLE blog_writing_registrations
    ALTER COLUMN branch_year SET NOT NULL;

  ALTER TABLE blog_writing_registrations
    ALTER COLUMN domain SET NOT NULL;

  ALTER TABLE blog_writing_registrations
    ALTER COLUMN blog_title SET NOT NULL;
EXCEPTION
  WHEN undefined_table THEN
    NULL;
END $$;

-- Hackathon: add girl_member_confirm and enforce team size 6
DO $$
BEGIN
  ALTER TABLE hackathon_registrations
    ADD COLUMN IF NOT EXISTS girl_member_confirm BOOLEAN NOT NULL DEFAULT false;

  ALTER TABLE hackathon_registrations
    DROP CONSTRAINT IF EXISTS hackathon_team_size_check;

  ALTER TABLE hackathon_registrations
    ADD CONSTRAINT hackathon_team_size_check
    CHECK (team_size = 6) NOT VALID;
EXCEPTION
  WHEN undefined_table THEN
    NULL;
END $$;
