"use client";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  loading?: boolean;
  variant?: "primary" | "outline" | "secondary";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  children,
  loading,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  let baseClass = "font-semibold rounded-lg shadow-lg focus:outline-none transition-all duration-200 ";
  let sizeClass = "";
  let variantClass = "";

  // Size
  if (size === "sm") sizeClass = "py-2 px-4 text-sm";
  else if (size === "md") sizeClass = "py-3 px-6 text-base";
  else sizeClass = "py-4 px-8 text-lg";

  // Variant
  if (variant === "primary")
    variantClass = "bg-green-600 hover:bg-green-700 text-white shadow-green-200 disabled:opacity-60";
  else if (variant === "outline")
    variantClass = "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-60";
  else if (variant === "secondary")
    variantClass = "bg-gray-500 hover:bg-gray-600 text-white disabled:opacity-60";

  return (
    <button
      {...props}
      className={`${baseClass} ${sizeClass} ${variantClass} ${props.className}`}
      disabled={props.disabled || loading}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
