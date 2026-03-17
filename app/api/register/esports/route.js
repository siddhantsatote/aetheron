import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { validateEsports } from "@/lib/validators";

export async function POST(request) {
  try {
    const body = await request.json();
    const errors = validateEsports(body);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { message: "Validation failed", errors },
        { status: 400 },
      );
    }

    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("esports_registrations")
      .insert([
        {
          full_name: body.full_name.trim(),
          email: body.email.trim().toLowerCase(),
          phone: body.phone.trim(),
          college: body.college.trim(),
          bgmi_uid: body.bgmi_uid.trim(),
          ign: body.ign.trim(),
          device_type: body.device_type,
          participation_type: body.participation_type,
          team_name: body.team_name?.trim() || null,
          squad_igns: body.squad_igns?.trim() || null,
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
