import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { ADMIN_COOKIE_NAME, ADMIN_COOKIE_VALUE } from "@/lib/adminAuth";

function toCategory(label, rows) {
  return {
    label,
    count: rows.length,
    rows,
  };
}

export async function GET(request) {
  try {
    const session = request.cookies.get(ADMIN_COOKIE_NAME)?.value;

    if (session !== ADMIN_COOKIE_VALUE) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const supabase = getSupabase();

    const [
      ideathonRes,
      hackathonRes,
      esportsRes,
      blogRes,
      flyerRes,
      reelRes,
      treasureRes,
      blogDriveRes,
    ] = await Promise.all([
      supabase
        .from("ideathon_registrations")
        .select("*")
        .order("created_at", { ascending: false }),
      supabase
        .from("hackathon_registrations")
        .select("*")
        .order("created_at", { ascending: false }),
      supabase
        .from("esports_registrations")
        .select("*")
        .order("created_at", { ascending: false }),
      supabase
        .from("blog_writing_registrations")
        .select("*")
        .order("created_at", { ascending: false }),
      supabase
        .from("flyer_making_registrations")
        .select("*")
        .order("created_at", { ascending: false }),
      supabase
        .from("reel_making_registrations")
        .select("*")
        .order("created_at", { ascending: false }),
      supabase
        .from("tech_treasure_hunt_registrations")
        .select("*")
        .order("created_at", { ascending: false }),
      supabase
        .from("blog_drive_submissions")
        .select("*")
        .order("submitted_at", { ascending: false }),
    ]);

    const errors = [
      ideathonRes.error,
      hackathonRes.error,
      esportsRes.error,
      blogRes.error,
      flyerRes.error,
      reelRes.error,
      treasureRes.error,
    ].filter(Boolean);

    if (errors.length > 0) {
      console.error("Admin dashboard fetch error:", errors);
      return NextResponse.json(
        { message: "Failed to fetch admin dashboard data" },
        { status: 500 },
      );
    }

    const categories = [
      toCategory("Ideathon", ideathonRes.data || []),
      toCategory("Hackathon", hackathonRes.data || []),
      toCategory("eSports", esportsRes.data || []),
      toCategory("Blog Writing", blogRes.data || []),
      toCategory("Flyer Making", flyerRes.data || []),
      toCategory("Reel Making", reelRes.data || []),
      toCategory("Tech Treasure Hunt", treasureRes.data || []),
      toCategory("Blog Drive Submissions", blogDriveRes.data || []),
    ];

    const total = categories.reduce((sum, category) => sum + category.count, 0);

    return NextResponse.json({ total, categories });
  } catch (err) {
    console.error("Admin dashboard server error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
