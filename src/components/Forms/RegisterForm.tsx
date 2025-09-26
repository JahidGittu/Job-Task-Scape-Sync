"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../ui/input";
import Checkbox from "../ui/checkbox";
import Button from "../ui/button";
import Divider from "../ui/divider";
import { ArrowBigLeft } from "lucide-react";

type Props = {
  role: "client" | "businessOwner";
  onRegistered: (email: string) => void;
  onBack?: () => void;
  onGoLogin?: () => void;
};

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm: string;
  agreed: boolean;
};

export default function RegisterForm({ role, onRegistered, onBack, onGoLogin }: Props) {
  const { control, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const password = watch("password");

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, password: data.password, role }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Something went wrong");
      onRegistered(data.email);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-xl shadow-xl w-full max-w-md flex flex-col">
      {onBack && (
        <button type="button" onClick={onBack} className="flex items-center gap-2 text-gray-700 font-semibold hover:text-gray-900">
          <ArrowBigLeft /> Back
        </button>
      )}
      <h2 className="text-2xl font-bold text-center">Register as {role}</h2>

      <div className="grid grid-cols-2 gap-4">
        <Controller name="firstName" control={control} defaultValue="" rules={{ required: "First name is required" }} render={({ field }) => <Input label="First Name" {...field} error={errors.firstName?.message} />} />
        <Controller name="lastName" control={control} defaultValue="" render={({ field }) => <Input label="Last Name" {...field} error={errors.lastName?.message} />} />
      </div>

      <Controller name="email" control={control} defaultValue="" rules={{ required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } }} render={({ field }) => <Input label="Email" type="email" {...field} error={errors.email?.message} />} />

      <Controller name="password" control={control} defaultValue="" rules={{ required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } }} render={({ field }) => <Input label="Password" type={showPassword ? "text" : "password"} showToggle toggleState={showPassword} onToggle={() => setShowPassword(s => !s)} {...field} error={errors.password?.message} />} />

      <Controller name="confirm" control={control} defaultValue="" rules={{ required: "Confirm your password", validate: value => value === password || "Passwords do not match" }} render={({ field }) => <Input label="Confirm Password" type={showConfirm ? "text" : "password"} showToggle toggleState={showConfirm} onToggle={() => setShowConfirm(s => !s)} {...field} error={errors.confirm?.message} />} />

      <Controller name="agreed" control={control} defaultValue={false} rules={{ required: "You must agree to terms" }} render={({ field }) => <Checkbox label="I agree to Terms" checked={field.value} onChange={field.onChange} onBlur={field.onBlur} error={errors.agreed?.message} />} />

      <div className="flex flex-col gap-4 mt-4">
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>{loading ? "Creating..." : "Create Account"}</Button>
        <Divider />
        <Button type="button" className="w-full bg-blue-600 hover:bg-blue-700">Continue with Google</Button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <span className="text-blue-600 underline cursor-pointer" onClick={() => onGoLogin && onGoLogin()}>Login</span>
        </p>
      </div>
    </form>
  );
}
