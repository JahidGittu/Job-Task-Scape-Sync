"use client";
import React, { useState } from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import Divider from "../ui/divider";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import GoogleLoginButton from "../ui/GoogleLogin";

type Props = {
  email?: string;
  onLoginSuccess: () => void;
  onRegister: () => void;
  onForgot: () => void;
  onRequireOTP: (email: string) => void; // OTP trigger callback
};

export default function LoginForm({
  email = "",
  onLoginSuccess,
  onRegister,
  onForgot,
  onRequireOTP,
}: Props) {
  const [userEmail, setUserEmail] = useState(email);
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); 
  const [showPassword, setShowPassword] = useState(false); // 🔑 password toggle
  const [showResend, setShowResend] = useState(false); // OTP resend option

  const handleSubmit = async () => {
    if (!userEmail || !password) {
      setError("Please enter email and password");
      return;
    }

    setLoading(true);
    setError(""); 
    setShowResend(false);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || data.message || "Something went wrong");
        return;
      }

      // OTP required
      if (data.requireOTP) {
        setError("Your email is not verified. Please verify it to login.");
        setShowResend(true);
        return;
      }

      // Login successful
      onLoginSuccess();
    } catch (err: any) {
      setError(err.message || "Internal Server Error");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setLoading(true);
    try {
      await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail }),
      });
      alert("OTP resent to your email");
    } catch (err) {
      console.error(err);
      alert("Failed to resend OTP");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="space-y-6 bg-white p-8 rounded-xl shadow-xl w-full max-w-lg flex flex-col">
      <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
      <p className="text-gray-600 text-center text-sm">Please share your login details so you can access the website.</p>

      <Input label="Email" type="email" value={userEmail} onChange={e => setUserEmail(e.target.value)} />

      {/* Password input with hide/show */}
      <div className="relative">
        <Input
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="absolute right-3 top-[38px] text-gray-500"
          onClick={() => setShowPassword(prev => !prev)}
        >
          {showPassword ? <HiOutlineEyeOff size={20} /> : <HiOutlineEye size={20} />}
        </button>
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(prev => !prev)}
            className="w-4 h-4"
          />
          Remember me
        </label>
        <span className="text-blue-600 underline cursor-pointer" onClick={onForgot}>
          Forgot?
        </span>
      </div>

      {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

      {/* OTP resend option */}
      {showResend && (
        <p className="text-sm text-gray-500 text-center mt-2">
          Didn’t receive code?{" "}
          <button
            type="button"
            className="text-blue-600 underline"
            onClick={handleResendOTP}
          >
            Resend OTP
          </button>
        </p>
      )}

      <Button type="button" className="w-full bg-green-600 hover:bg-green-700" onClick={handleSubmit} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </Button>

      <Divider />

     <GoogleLoginButton/>

      <p className="text-center text-sm text-gray-600 mt-2">
        Don't have an account?{" "}
        <span className="text-blue-600 underline cursor-pointer" onClick={onRegister}>
          Register
        </span>
      </p>
    </div>
  );
}
