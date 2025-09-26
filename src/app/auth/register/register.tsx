// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Eye, EyeOff } from "lucide-react";

// type FormState = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirm: string;
// };

// export default function RegisterPage() {
//   const [form, setForm] = useState<FormState>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirm: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [agreed, setAgreed] = useState(true);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [submitting, setSubmitting] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
//     setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
//   };

//   const validate = () => {
//     const errs: Record<string, string> = {};
//     if (!form.firstName.trim()) errs.firstName = "First name required";
//     if (!form.email.trim()) errs.email = "Email required";
//     else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Invalid email";
//     if (!form.password) errs.password = "Password required";
//     if (form.password !== form.confirm) errs.confirm = "Passwords do not match";
//     if (!agreed) errs.agreed = "You must agree to terms";
//     setErrors(errs);
//     return Object.keys(errs).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validate()) return;
//     setSubmitting(true);
//     try {
//       // demo: replace with real API call
//       await new Promise((r) => setTimeout(r, 900));
//       alert("Demo submit — replace with real API integration");
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center py-12 px-6">
//       {/* top-left logo like the reference */}
//       <div className="absolute top-6 left-6 flex items-center gap-2">
//         <div className="w-10 h-10 rounded-md bg-green-600 flex items-center justify-center text-white font-bold">S</div>
//         <div className="hidden sm:block text-gray-700 font-semibold">ScapeSync</div>
//       </div>

//       <div className="w-full max-w-md mx-auto">
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-semibold text-gray-800">Create your Account</h1>
//           <p className="text-sm text-gray-500 mt-1">When sports Meets smart Tech.</p>
//         </div>

//         <form onSubmit={handleSubmit} className="bg-white space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             {/* First name */}
//             <div className="relative">
//               <input
//                 id="firstName"
//                 name="firstName"
//                 value={form.firstName}
//                 onChange={handleChange}
//                 placeholder=" "
//                 className="peer w-full rounded-md border border-gray-200 px-4 py-3 placeholder-transparent focus:border-green-600 focus:ring-0"
//                 aria-invalid={!!errors.firstName}
//                 aria-describedby={errors.firstName ? "firstName-error" : undefined}
//               />
//               <label
//                 htmlFor="firstName"
//                 className="absolute left-3 -top-3 text-xs text-gray-500 bg-white px-1 transition-all duration-150 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs"
//               >
//                 First Name
//               </label>
//               {errors.firstName && (
//                 <p id="firstName-error" className="text-xs text-red-600 mt-1">
//                   {errors.firstName}
//                 </p>
//               )}
//             </div>

//             {/* Last name */}
//             <div className="relative">
//               <input
//                 id="lastName"
//                 name="lastName"
//                 value={form.lastName}
//                 onChange={handleChange}
//                 placeholder=" "
//                 className="peer w-full rounded-md border border-gray-200 px-4 py-3 placeholder-transparent focus:border-green-600 focus:ring-0"
//               />
//               <label
//                 htmlFor="lastName"
//                 className="absolute left-3 -top-3 text-xs text-gray-500 bg-white px-1 transition-all duration-150 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs"
//               >
//                 Last name
//               </label>
//             </div>
//           </div>

//           {/* Email */}
//           <div className="relative">
//             <input
//               id="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder=" "
//               type="email"
//               className="peer w-full rounded-md border border-gray-200 px-4 py-3 placeholder-transparent focus:border-green-600 focus:ring-0"
//               aria-invalid={!!errors.email}
//               aria-describedby={errors.email ? "email-error" : undefined}
//             />
//             <label
//               htmlFor="email"
//               className="absolute left-3 -top-3 text-xs text-gray-500 bg-white px-1 transition-all duration-150 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs"
//             >
//               Email address
//             </label>
//             {errors.email && (
//               <p id="email-error" className="text-xs text-red-600 mt-1">
//                 {errors.email}
//               </p>
//             )}
//           </div>

//           {/* Password */}
//           <div className="relative">
//             <input
//               id="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               placeholder=" "
//               type={showPassword ? "text" : "password"}
//               className="peer w-full rounded-md border border-gray-200 px-4 py-3 placeholder-transparent focus:border-green-600 focus:ring-0"
//               aria-invalid={!!errors.password}
//               aria-describedby={errors.password ? "password-error" : undefined}
//             />
//             <label
//               htmlFor="password"
//               className="absolute left-3 -top-3 text-xs text-gray-500 bg-white px-1 transition-all duration-150 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs"
//             >
//               Password
//             </label>

//             <button
//               type="button"
//               onClick={() => setShowPassword((s) => !s)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
//               aria-label={showPassword ? "Hide password" : "Show password"}
//             >
//               {showPassword ? <EyeOff/> : <Eye/>}
//             </button>

//             {errors.password && (
//               <p id="password-error" className="text-xs text-red-600 mt-1">
//                 {errors.password}
//               </p>
//             )}
//           </div>

//           {/* Confirm Password */}
//           <div className="relative">
//             <input
//               id="confirm"
//               name="confirm"
//               value={form.confirm}
//               onChange={handleChange}
//               placeholder=" "
//               type={showConfirm ? "text" : "password"}
//               className="peer w-full rounded-md border border-gray-200 px-4 py-3 placeholder-transparent focus:border-green-600 focus:ring-0"
//               aria-invalid={!!errors.confirm}
//               aria-describedby={errors.confirm ? "confirm-error" : undefined}
//             />
//             <label
//               htmlFor="confirm"
//               className="absolute left-3 -top-3 text-xs text-gray-500 bg-white px-1 transition-all duration-150 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs"
//             >
//               Confirm Password
//             </label>

//             <button
//               type="button"
//               onClick={() => setShowConfirm((s) => !s)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
//               aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
//             >
//               {showConfirm ? <EyeOff/> : <Eye/>}
//             </button>

//             {errors.confirm && (
//               <p id="confirm-error" className="text-xs text-red-600 mt-1">
//                 {errors.confirm}
//               </p>
//             )}
//           </div>

//           {/* Terms */}
//           <div className="flex items-start gap-2">
//             <label className="inline-flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={agreed}
//                 onChange={(e) => setAgreed(e.target.checked)}
//                 className="w-4 h-4 rounded-sm border-gray-300"
//               />
//               <span className="text-sm text-gray-700">I agree to Tech Takes</span>
//             </label>
//             <div className="text-sm text-gray-500">
//               <Link href="#" className="underline">
//                 Terms of Service
//               </Link>
//               <span className="px-1">and</span>
//               <Link href="#" className="underline">
//                 Privacy Policy
//               </Link>
//             </div>
//           </div>
//           {errors.agreed && <p className="text-xs text-red-600">{errors.agreed}</p>}

//           {/* Create Account button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-lg shadow-green-200 disabled:opacity-60"
//               disabled={submitting}
//             >
//               {submitting ? "Creating..." : "Create Account"}
//             </button>
//           </div>

//           {/* OR divider */}
//           <div className="flex items-center gap-3">
//             <div className="h-px bg-gray-200 flex-1" />
//             <div className="text-xs text-gray-400">OR</div>
//             <div className="h-px bg-gray-200 flex-1" />
//           </div>

//           {/* Continue with Google */}
//           <div>
//             <button type="button" className="w-full rounded-md border border-gray-200 py-2.5 flex items-center justify-center gap-2">
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M21.35 11.1H12v2.8h5.35c-.23 1.4-1.46 3.7-5.35 3.7-3.22 0-5.85-2.66-5.85-5.94s2.63-5.94 5.85-5.94c1.84 0 3.08.78 3.79 1.45l2.58-2.49C17.95 3.03 15.3 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c5.64 0 9.2-3.96 9.2-9.58 0-.64-.07-1.12-.05-1.32z" fill="#EA4335" />
//               </svg>
//               <span className="text-sm text-gray-700">Continue with Google</span>
//             </button>
//           </div>

//           <p className="text-center text-sm text-gray-500">
//             Already have an account? <Link href="#" className="text-green-600 underline">Login</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }





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
