import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Ueaarthorn Uawongtrakul",
    studentId: "650612171",
  });
};
