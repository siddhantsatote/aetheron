-- ============================================
-- AETHERON TECH FEST — Supabase Database Schema
-- Run this in Supabase SQL Editor
-- ============================================

-- Ideathon registrations
CREATE TABLE ideathon_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  college TEXT NOT NULL,
  team_name TEXT NOT NULL,
  team_size INTEGER NOT NULL,
  idea_title TEXT NOT NULL,
  problem_statement TEXT NOT NULL,
  domain TEXT NOT NULL,
  team_members TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Hackathon registrations
CREATE TABLE hackathon_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  college TEXT NOT NULL,
  team_name TEXT NOT NULL,
  team_size INTEGER NOT NULL,
  project_idea TEXT,
  team_members TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- eSports registrations (Squad only)
CREATE TABLE esports_registrations (
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
CREATE POLICY "Allow public insert ideathon" ON ideathon_registrations FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert hackathon" ON hackathon_registrations FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert esports" ON esports_registrations FOR INSERT WITH CHECK (true);

-- Allow select for count endpoint (read-only via anon key)
CREATE POLICY "Allow public read ideathon" ON ideathon_registrations FOR SELECT USING (true);
CREATE POLICY "Allow public read hackathon" ON hackathon_registrations FOR SELECT USING (true);
CREATE POLICY "Allow public read esports" ON esports_registrations FOR SELECT USING (true);
