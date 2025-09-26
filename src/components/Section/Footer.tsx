'use client';

import Image from "next/image";
import Link from "next/link";
import appleStore from "@/assets/HeroImage/AppleStore.png";
import playStore from "@/assets/HeroImage/PlayStore.png";
import footerBg from "@/assets/FooterImage/Mask group.png";
import logo from "@/assets/FooterImage/FooterLogo.png";
import { Youtube, X, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0F3B34] text-primary-foreground">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={footerBg}
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
      <div className="container-custom py-12 flex flex-col md:flex-row items-center md:justify-between gap-8">

        <div className="flex flex-col gap-20 py-24">
          {/* Left: Logo */}
          <div className="flex items-center gap-2 ">
            <Image src={logo} alt="ScapeSync Logo" className="w-52" />
          </div>


          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/80 transition"><Youtube className="h-6 w-6" /></a>
            <a href="#" className="hover:text-white/80 transition"><X className="h-6 w-6" /></a>
            <a href="#" className="hover:text-white/80 transition"><Facebook className="h-6 w-6" /></a>
            <a href="#" className="hover:text-white/80 transition"><Instagram className="h-6 w-6" /></a>
          </div>
        </div>


        <div>
          <p>
            Your all-in-one platform for job scheduling, employee management, and client service built to keep your business running smoothly from anywhere.
          </p>
        </div>


        {/* Center: App Store Buttons */}
        <div className="flex gap-4">
          <Link href="#">
            <Image src={appleStore} alt="Apple Store" className="h-12 w-auto hover:scale-105 transition" />
          </Link>
          <Link href="#">
            <Image src={playStore} alt="Google Play" className="h-12 w-auto hover:scale-105 transition" />
          </Link>
        </div>



      </div>
    </footer>
  );
}

export default Footer;
