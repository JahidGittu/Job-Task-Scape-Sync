"use client";
import React, { useEffect } from "react";
import Button from "../ui/button";
import confetti from "canvas-confetti";
import Link from "next/link";

type SuccessFormProps = {
  message: string;
};

export default function SuccessForm({ message }: SuccessFormProps) {
  useEffect(() => {
    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md text-center space-y-4 animate-fade-in">
      <h2 className="text-2xl font-bold text-green-600">{message}</h2>
      <p className="text-sm text-gray-600">🎉 Registration Successful! 🎉</p>

      <Link href="/">
        <Button className="w-full bg-green-600 hover:bg-green-700">Go Home</Button>
      </Link>
    </div>
  );
}
