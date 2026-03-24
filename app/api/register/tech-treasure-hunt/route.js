import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { validateTechTreasureHunt } from "@/lib/validators";

export async function POST(request) {
  try {
    const body = await request.json();
    const errors = validateTechTreasureHunt(body);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { message: "Validation failed", errors },
        { status: 400 },
      );
    }

    const members = [
      {
        role: "Team Lead",
        name: body.team_lead_name?.trim() || "",
      },
      {
        role: "Member 2",
        name: body.member_2_name?.trim() || "",
      },
      {
        role: "Member 3",
        name: body.member_3_name?.trim() || "",
      },
      {
        role: "Member 4",
        name: body.member_4_name?.trim() || "",
      },
    ].filter((member) => member.name);

    if (members.length < 2 || members.length > 4) {
      return NextResponse.json(
        { message: "Team must have minimum 2 and maximum 4 members." },
        { status: 400 },
      );
    }

    const teamLeadContact = {
      email: body.team_lead_email.trim().toLowerCase(),
      phone: body.team_lead_phone.trim(),
    };

    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("tech_treasure_hunt_registrations")
      .insert([
        {
          team_size: members.length,
          team_members: JSON.stringify({
            team_lead_contact: teamLeadContact,
            members,
          }),
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
