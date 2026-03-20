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

-- Enable Row Level Security
ALTER TABLE ideathon_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE hackathon_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE esports_registrations ENABLE ROW LEVEL SECURITY;

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
