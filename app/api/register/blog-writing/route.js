import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { validateBlogWriting } from "@/lib/validators";

export async function POST(request) {
  try {
    const body = await request.json();
    const errors = validateBlogWriting(body);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { message: "Validation failed", errors },
        { status: 400 },
      );
    }

    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("blog_writing_registrations")
      .insert([
        {
          full_name: body.full_name.trim(),
          college: body.college.trim(),
          branch_year: body.branch_year.trim(),
          phone: body.phone.trim(),
          email: body.email.trim().toLowerCase(),
          domain: body.domain.trim(),
          blog_title: body.blog_title.trim(),
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
