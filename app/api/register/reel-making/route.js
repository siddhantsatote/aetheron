import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { validateReelMaking } from "@/lib/validators";

export async function POST(request) {
  try {
    const body = await request.json();
    const errors = validateReelMaking(body);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { message: "Validation failed", errors },
        { status: 400 },
      );
    }

    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("reel_making_registrations")
      .insert([
        {
          full_name: body.full_name.trim(),
          email: body.email.trim().toLowerCase(),
          instagram_id: body.instagram_id.trim(),
          phone: body.phone.trim(),
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { message: "Failed to save registration. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Registration successful!", data: data[0] },
      { status: 201 },
    );
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
