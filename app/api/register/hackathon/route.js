import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { validateHackathon } from "@/lib/validators";

export async function POST(request) {
  try {
    const body = await request.json();
    const errors = validateHackathon(body);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { message: "Validation failed", errors },
        { status: 400 },
      );
    }

    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("hackathon_registrations")
      .insert([
        {
          full_name: body.full_name.trim(),
          email: body.email.trim().toLowerCase(),
          phone: body.phone.trim(),
          college: body.college.trim(),
          team_name: body.team_name.trim(),
          team_size: body.team_size,
          girl_member_confirm: body.girl_member_confirm,
          project_idea: body.problem_statement?.trim() || null,
          team_members: body.team_members?.trim() || null,
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
