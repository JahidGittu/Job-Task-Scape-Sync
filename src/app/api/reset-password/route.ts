// app/api/reset-password/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User, { IUser } from "@/models/User"; // <-- টাইপ ইমপোর্ট
import { connectDB } from "@/lib/mongodb";

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { email, otp, newPassword } = body || {};

    if (!email || !newPassword) {
      return NextResponse.json({ error: "email and newPassword are required" }, { status: 400 });
    }

    await connectDB();

    // 🔹 If OTP provided, forgot-password flow
    if (otp) {
      const now = new Date();
      const hashed = await bcrypt.hash(newPassword.trim(), 10);

      const updated = await User.findOneAndUpdate(
        { email, otp, otpExpires: { $gt: now } },
        { $set: { password: hashed }, $unset: { otp: "", otpExpires: "" } },
        { new: true }
      ).lean<IUser | null>(); // <-- টাইপ ঠিক করলাম

      if (!updated) {
        return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 400 });
      }

      console.log("✅ RESET (otp): updated password hash:", updated.password);
      return NextResponse.json({ message: "Password reset successful", success: true });
    }

    // 🔹 If no OTP, allow only verified users
    const user = await User.findOne({ email }).lean<IUser | null>();
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    if (!user.isVerified) {
      return NextResponse.json({ error: "OTP required or user not verified" }, { status: 403 });
    }

    const hashed = await bcrypt.hash(newPassword.trim(), 10);
    const updatedNoOtp = await User.findOneAndUpdate(
      { email },
      { $set: { password: hashed } },
      { new: true }
    ).lean<IUser | null>(); // <-- টাইপ ঠিক করলাম

    if (!updatedNoOtp) {
      return NextResponse.json({ error: "Failed to update password" }, { status: 500 });
    }

    console.log("✅ RESET (no-otp): updated password hash:", updatedNoOtp.password);
    return NextResponse.json({ message: "Password reset successful", success: true });
  } catch (error: any) {
    console.error("❌ Reset Password Error:", error);
    return NextResponse.json({ error: error.message || "Server error" }, { status: 500 });
  }
}
