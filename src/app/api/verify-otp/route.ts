// app/api/verify-otp/route.ts
import { NextResponse } from "next/server";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();
    if (!email || !otp) return NextResponse.json({ error: "Email and OTP are required" }, { status: 400 });

    await connectDB();

    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    if (!user.otp || !user.otpExpires) return NextResponse.json({ error: "No OTP request found" }, { status: 400 });

    if (user.otp !== otp) return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
    if (user.otpExpires < new Date()) return NextResponse.json({ error: "OTP expired" }, { status: 400 });

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    return NextResponse.json({ message: "OTP verified successfully", success: true });
  } catch (error: any) {
    console.error("Verify OTP Error:", error);
    return NextResponse.json({ error: "Server error", details: error.message }, { status: 500 });
  }
}
