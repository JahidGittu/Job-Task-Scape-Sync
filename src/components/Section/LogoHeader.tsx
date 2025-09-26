import React from 'react'
import logoHeader from "@/assets/NavbarImage/NavLogo.png";
import Image from 'next/image';

export default function LogoHeader() {
    return (
        <div className="flex items-center gap-2">
            <Image src={logoHeader} alt="ScapeSync" className="h-8 w-auto" />
        </div>
    )
}
