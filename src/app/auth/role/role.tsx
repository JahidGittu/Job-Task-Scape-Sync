"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RoleForm from "@/components/Forms/RoleForm";
import RegisterForm from "@/components/Forms/RegisterForm";

export default function RolePage() {
  const [role, setRole] = useState<"client" | "businessOwner" | "">("");
  const [email, setEmail] = useState("");

  const [direction, setDirection] = useState(1); // 1: next, -1: back

  const handleRegistered = (userEmail: string) => {
    setEmail(userEmail);
    console.log("User registered:", userEmail);
  };

  const handleBack = () => {
    setDirection(-1);
    setRole("");
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <AnimatePresence mode="wait" custom={direction}>
        {!role && (
          <motion.div
            key="role"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <RoleForm onSelect={(r) => { setRole(r); setDirection(1); }} />
          </motion.div>
        )}

        {role && (
          <motion.div
            key="register"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <RegisterForm role={role} onRegistered={handleRegistered} onBack={handleBack} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
