"use client";
import React, { useState } from "react";
import Input from "../ui/input";
import Button from "../ui/button";

type Props = {
  email: string;
  otp: string;
  onResetSuccess: () => void;
  onBack?: () => void;
};

export default function ResetPasswordForm({ email, otp, onResetSuccess, onBack }: Props) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!password || password.length < 6) return alert("Password must be at least 6 characters");
    if (password !== confirm) return alert("Passwords do not match");

    setLoading(true);
    try {
      const res = await fetch("/api/reset-password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword: password.trim() }),
      });



      const data = await res.json();
      if (!res.ok) return alert(data.error || "Failed to reset password");

      alert("Password reset successfully!");
      onResetSuccess();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 bg-white p-8 rounded-xl shadow-xl w-full max-w-md flex flex-col">
      {onBack && (
        <button onClick={onBack} className="text-gray-700 hover:text-gray-900 font-semibold mb-2">Back</button>
      )}
      <h2 className="text-2xl font-bold text-center">Reset Password</h2>

      <Input label="New Password" type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} showToggle toggleState={showPassword} onToggle={() => setShowPassword(s => !s)} />
      <Input label="Confirm Password" type={showConfirm ? "text" : "password"} value={confirm} onChange={e => setConfirm(e.target.value)} showToggle toggleState={showConfirm} onToggle={() => setShowConfirm(s => !s)} />

      <Button type="button" className="w-full bg-green-600 hover:bg-green-700" onClick={handleSubmit} disabled={loading}>
        {loading ? "Resetting..." : "Reset Password"}
      </Button>
    </div>
  );
}
