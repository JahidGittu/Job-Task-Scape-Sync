
"use client";
import RegisterForm from "@/components/Forms/RegisterForm";

export default function RegisterPage() {
  const handleRegistered = (email: string) => {
    console.log("User registered with email:", email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6 bg-white">
      <div className="w-full max-w-md">
        <RegisterForm
          role="client"
          onRegistered={handleRegistered}
          onBack={() => console.log("Back clicked")} // optional
        />
      </div>
    </div>
  );
}
