import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function GET() {
  try {
    const supabase = getSupabase();
    const [
      ideathon,
      hackathon,
      esports,
      blogWriting,
      flyerMaking,
      reelMaking,
      techTreasureHunt,
    ] = await Promise.all([
      supabase
        .from("ideathon_registrations")
        .select("id", { count: "exact", head: true }),
      supabase
        .from("hackathon_registrations")
        .select("id", { count: "exact", head: true }),
      supabase
        .from("esports_registrations")
        .select("id", { count: "exact", head: true }),
      supabase
        .from("blog_writing_registrations")
        .select("id", { count: "exact", head: true }),
      supabase
        .from("flyer_making_registrations")
        .select("id", { count: "exact", head: true }),
      supabase
        .from("reel_making_registrations")
        .select("id", { count: "exact", head: true }),
      supabase
        .from("tech_treasure_hunt_registrations")
        .select("id", { count: "exact", head: true }),
    ]);

    return NextResponse.json({
      ideathon: ideathon.count || 0,
      hackathon: hackathon.count || 0,
      esports: esports.count || 0,
      blog_writing: blogWriting.count || 0,
      flyer_making: flyerMaking.count || 0,
      reel_making: reelMaking.count || 0,
      tech_treasure_hunt: techTreasureHunt.count || 0,
      total:
        (ideathon.count || 0) +
        (hackathon.count || 0) +
        (esports.count || 0) +
        (blogWriting.count || 0) +
        (flyerMaking.count || 0) +
        (reelMaking.count || 0) +
        (techTreasureHunt.count || 0),
    });
  } catch (err) {
    console.error("Count error:", err);
    return NextResponse.json(
      { message: "Failed to fetch counts" },
      { status: 500 },
    );
  }
}
