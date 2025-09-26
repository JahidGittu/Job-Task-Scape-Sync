"use client";
import { signIn } from "next-auth/react";
import Button from "../ui/button";
import { FcGoogle } from "react-icons/fc";

export default function GoogleLoginButton() {
  return (
    <button
      type="button"
      className="w-full bg-gray-200 hover:bg-gray-300/90 p-3 rounded-lg flex justify-center items-center gap-4"
      onClick={() => signIn("google", { callbackUrl: "/" })}
    >
      <FcGoogle />
      Continue with Google
    </button>
  );
}
