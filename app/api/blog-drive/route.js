import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(request) {
  try {
    const body = await request.json();
    const full_name = (body.full_name || "").trim();
    const drive_link = (body.drive_link || "").trim();

    if (!full_name || !drive_link) {
      return NextResponse.json(
        { message: "Name and drive link are required." },
        { status: 400 },
      );
    }

    if (!/^https?:\/\//i.test(drive_link)) {
      return NextResponse.json(
        { message: "Drive link must be a valid URL." },
        { status: 400 },
      );
    }

    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("blog_drive_submissions")
      .insert([{ full_name, drive_link }])
      .select();

    if (error) {
      console.error("blog-drive inserterr", error);
      return NextResponse.json(
        { message: "Failed to save drive link.", details: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Drive link saved", data: data?.[0] },
      { status: 201 },
    );
  } catch (err) {
    console.error("blog-drive server error", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
