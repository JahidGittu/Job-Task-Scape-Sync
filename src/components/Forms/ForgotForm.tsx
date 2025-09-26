"use client";
import React, { useState } from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import { ChevronLeft } from "lucide-react";

type Props = {
  onSubmit: (email: string) => void;
  onBack?: () => void;
};

export default function ForgotForm({ onSubmit, onBack }: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Failed to send OTP");
        setLoading(false);
        return;
      }
      alert("OTP sent to your email");
      onSubmit(email); // next step: OTPForm
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 bg-white p-8 rounded-xl shadow-xl w-full max-w-md flex flex-col">
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-gray-700 font-semibold hover:text-gray-900"
        >
          <ChevronLeft /> Back
        </button>
      )}
      <h2 className="text-2xl font-bold text-center">Forgot your password?</h2>
      <p className="text-gray-600 text-sm">
        Please enter the email address associated with your account, and we'll send you an OTP to reset your password.
      </p>
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Button
        type="button"
        className="w-full bg-green-600 hover:bg-green-700"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send OTP"}
      </Button>
    </div>
  );
}
