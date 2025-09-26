# ScapeSync Authentication & Password Reset Project

This is a **Next.js 15+ project** with **TypeScript**, **MongoDB**, and **TailwindCSS**.  
It implements **user authentication**, **email verification via OTP**, **forgot password**, and **password reset** functionalities with a multi-step form UI.

---

## Features

- User registration with email & password
- Email verification via 6-digit OTP
- OTP resend functionality
- Forgot password workflow
- Reset password using OTP
- Real-time validation for passwords & OTP
- Responsive and modern UI with TailwindCSS
- Secure password hashing using `bcryptjs`

---

## Tech Stack

- **Frontend:** Next.js 15+ (App Router), React, TailwindCSS, TypeScript
- **Backend:** Next.js API routes
- **Database:** MongoDB (Atlas or local)
- **Libraries:** 
  - `bcryptjs` → Password hashing
  - `framer-motion` → Optional animations for OTP form
  - `lucide-react` → Icons
  - `nodemailer` or any SMTP utility → Sending OTP emails

---

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts
│   │   ├── login/
│   │   │   └── route.ts
│   │   ├── register/
│   │   │   └── route.ts
│   │   ├── reset-password/
│   │   │   └── route.ts
│   │   ├── send-otp/
│   │   │   └── route.ts
│   │   └── verify-otp/
│   │       └── route.ts
│   ├── auth/
│   │   ├── register/
│   │   │   └── register.tsx
│   │   ├── role/
│   │   │   └── role.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── assets/
│   ├── FooterImage/
│   │   ├── FooterLogo.png
│   │   └── Mask group.png
│   ├── HeroImage/
│   │   ├── AppleStore.png
│   │   ├── HeroBgFlower.png
│   │   ├── HeroImgBtnGlow.png
│   │   ├── HeroPhone.png
│   │   ├── PlayStore.png
│   │   ├── SideEffectIMG.png
│   │   ├── SideEffectIMG2.png
│   │   └── UnderlineStrockIMG.png
│   ├── NavbarImage/
│   │   └── NavLogo.png
│   ├── ProductShowcaseImage/
│   │   ├── feature-phone-1.png.png
│   │   ├── feature-phone-2.png.png
│   │   └── feature-phone-3.png.png
│   └── Role/
│       ├── business.png
│       └── client.png
├── components/
│   ├── Forms/
│   │   ├── ForgotForm.tsx
│   │   ├── LoginForm.tsx
│   │   ├── OTPForm.tsx
│   │   ├── RegisterForm.tsx
│   │   ├── ResetPasswordForm.tsx
│   │   ├── RoleForm.tsx
│   │   └── SuccessForm.tsx
│   ├── Section/
│   │   ├── FAQ.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LogoHeader.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductShowcase.tsx
│   │   └── Testimonials.tsx
│   └── ui/
│       ├── GoogleLogin.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── divider.tsx
│       └── input.tsx
├── lib/
│   └── mongodb.ts
├── models/
│   └── User.ts
├── theme/
│   ├── ThemeProvider.tsx
│   └── ThemeSwitch.tsx
├── types/
│   ├── canvas-confetti.ts
│   └── next-auth.ts
└── utils/
    └── sendOTP.ts
```

git clone https://github.com/JahidGittu/Job-Task-Scape-Sync.git
cd Job-Task-Scape-Sync

npm install
# or
yarn install


Usage

Navigate to the registration page.

Register using your email and password.

Verify your account using the OTP sent to your email.

If you forget your password, use the forgot password flow to reset it.

Log in using verified credentials.