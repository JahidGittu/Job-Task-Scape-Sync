"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RoleForm from "@/components/Forms/RoleForm";
import RegisterForm from "@/components/Forms/RegisterForm";
import LoginForm from "@/components/Forms/LoginForm";
import ForgotForm from "@/components/Forms/ForgotForm";
import ResetPasswordForm from "@/components/Forms/ResetPasswordForm";
import OTPForm from "@/components/Forms/OTPForm";
import SuccessForm from "@/components/Forms/SuccessForm";

type Step =
  | "role"
  | "register"
  | "login"
  | "forgot"
  | "otpForgot"
  | "reset"
  | "otpRegister"
  | "success";

export default function MultiStepAuthPage() {
  const [step, setStep] = useState<Step>("role");
  const [role, setRole] = useState<"client" | "businessOwner" | "">("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(""); 

  const [direction, setDirection] = useState(1);

  const nextStep = (next: Step) => {
    setDirection(1);
    setStep(next);
  };

  const prevStep = (prev: Step) => {
    setDirection(-1);
    setStep(prev);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <AnimatePresence mode="wait" custom={direction}>
        {/* Role */}
        {step === "role" && (
          <motion.div key="role" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}>
            <RoleForm
              onSelect={(r) => {
                setRole(r);
                nextStep("register");
              }}
            />
          </motion.div>
        )}

        {/* Register */}
        {step === "register" && role && (
          <motion.div key="register" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}>
            <RegisterForm
              role={role}
              onRegistered={(userEmail) => {
                setEmail(userEmail);
                nextStep("otpRegister"); // OTP for registration
              }}
              onBack={() => prevStep("role")}
              onGoLogin={() => nextStep("login")}
            />
          </motion.div>
        )}

        {/* OTP after registration */}
        {step === "otpRegister" && (
          <motion.div key="otpRegister" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}>
            <OTPForm
              email={email}
              onVerified={() => nextStep("login")}
              onResend={async () => {
                await fetch("/api/send-otp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
                alert("OTP resent to your email");
              }}
            />
          </motion.div>
        )}

        {/* Login */}
        {step === "login" && (
          <motion.div key="login" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}>
            <LoginForm
              email={email}
              onLoginSuccess={() => nextStep("success")}
              onRegister={() => nextStep("register")}
              onForgot={() => nextStep("forgot")}
              onRequireOTP={(userEmail) => {
                setEmail(userEmail);
                nextStep("otpRegister");
              }}
            />
          </motion.div>
        )}

        {/* Forgot password → email input */}
        {step === "forgot" && (
          <motion.div key="forgot" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}>
            <ForgotForm
              onSubmit={(userEmail) => {
                setEmail(userEmail);
                nextStep("otpForgot"); // OTP for forgot password
              }}
              onBack={() => prevStep("login")}
            />
          </motion.div>
        )}

        {/* OTP after forgot password */}
        {step === "otpForgot" && (
          <motion.div key="otpForgot" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}>
            <OTPForm
              email={email}
              onVerified={() => nextStep("reset")}
              onResend={async () => {
                await fetch("/api/send-otp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
                alert("OTP resent to your email");
              }}
            />
          </motion.div>
        )}

        {/* Reset password */}
        {step === "reset" && (
          <motion.div key="reset" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}>
            <ResetPasswordForm
              email={email}
              otp={otp}
              onResetSuccess={() => nextStep("login")}
              onBack={() => prevStep("otpForgot")}
            />
          </motion.div>
        )}

        {/* Success */}
        {step === "success" && (
          <motion.div key="success" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}>
            <SuccessForm message="Account created successfully!" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
