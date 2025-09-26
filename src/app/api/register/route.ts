import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";
import { sendOTP } from "@/utils/sendOTP";

export async function POST(req: Request) {
  try {
    const { email, password, role } = await req.json();
    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const newUser = new User({
      email,
      password: hashedPassword,
      role,
      otp,
      otpExpires: new Date(Date.now() + 10 * 60 * 1000),
    });

    await newUser.save();
    await sendOTP(email, otp);

    return NextResponse.json({ message: "User registered. OTP sent." });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
