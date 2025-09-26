'use client';

import Image from "next/image";
import Link from "next/link";
import logoHeader from "@/assets/NavbarImage/NavLogo.png";
import ThemeSwitch from "@/theme/ThemeSwitch";
import LogoHeader from "./LogoHeader";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <div>
          <LogoHeader/>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <Link href="/auth">
            <button className="btn bg-[#3BA334] rounded-2xl px-4 py-2 text-white font-bold cursor-pointer">Get Started</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
