// src/app/auth/layout.tsx
import LogoHeader from "@/components/Section/LogoHeader";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="bg-gray-50 flex flex-col">
      {/* Fixed header / navbar style */}
      <header className="w-full bg-white fixed top-0 left-0 z-50">
        <div className="px-6 py-3">
          <LogoHeader />
        </div>
      </header>

      {/* Main content */}
      <main className="items-center justify-center">
        {children}
      </main>
    </div>
  );
}
