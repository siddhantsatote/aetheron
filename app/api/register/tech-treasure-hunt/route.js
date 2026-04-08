import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { message: "Tech Treasure Hunt registration is closed." },
    { status: 403 },
  );
}
