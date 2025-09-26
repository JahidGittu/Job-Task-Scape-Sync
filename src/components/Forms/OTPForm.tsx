"use client";
import React, { useState, useRef, useEffect } from "react";
import Button from "../ui/button";

type Props = {
  email: string;
  onVerified: () => void;       // OTP verified successfully
  onResend?: () => void;
};

export default function OTPForm({ email, onVerified, onResend }: Props) {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  // Auto-focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const val = e.target.value.replace(/\D/g, "");
    if (!val) return;
    const newOtp = [...otp];
    newOtp[idx] = val[0];
    setOtp(newOtp);

    // Focus next input automatically
    if (idx < 5) inputRefs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[idx]) {
        newOtp[idx] = "";
        setOtp(newOtp);
      } else if (idx > 0) {
        newOtp[idx - 1] = "";
        setOtp(newOtp);
        inputRefs.current[idx - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, "");
    if (pasteData.length === 6) {
      setOtp(pasteData.split(""));
      pasteData.split("").forEach((digit, idx) => {
        if (inputRefs.current[idx]) inputRefs.current[idx]!.value = digit;
      });
      inputRefs.current[5]?.focus(); // focus last after paste
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length !== 6) return alert("Please enter 6-digit OTP");

    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: code }),
      });
      const data = await res.json();
      if (!res.ok) return alert(data.error || "OTP verification failed");

      onVerified();
    } catch (err) {
      alert("Server error during OTP verification");
    }
  };

  return (
    <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-center">Verify Your Email</h2>
      <p className="text-center text-sm">Code sent to <b>{email}</b></p>

      <div className="flex justify-between gap-2" onPaste={handlePaste}>
        {otp.map((val, idx) => (
          <input
            key={idx}
            ref={(el) => { inputRefs.current[idx] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={val}
            onChange={(e) => handleChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className="w-12 h-12 text-center border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>

      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">Verify</Button>

      {onResend && (
        <p className="text-sm text-center text-gray-500">
          Didn’t receive code?{" "}
          <button type="button" className="text-blue-600 underline" onClick={onResend}>Resend OTP</button>
        </p>
      )}
    </form>
  );
}
