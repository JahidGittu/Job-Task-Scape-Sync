"use client";
import React, { useState } from "react";
import Button from "../ui/button";
import Image from "next/image";
import clientImg from "@/assets/Role/client.png";
import businessImg from "@/assets/Role/business.png";
import LogoHeader from "../Section/LogoHeader";

type Props = {
    onSelect: (role: "client" | "businessOwner") => void;
};

export default function RoleForm({ onSelect }: Props) {
    const [selectedRole, setSelectedRole] = useState<"client" | "businessOwner" | null>(null);

    const handleSelect = (role: "client" | "businessOwner") => {
        setSelectedRole(role);
        onSelect(role);
    };

    const roles = [
        {
            key: "client" as const,
            title: "I am a Client",
            description: "Discover services & track projects effortlessly",
            image: clientImg,
        },
        {
            key: "businessOwner" as const,
            title: "I am a Business Owner",
            description: "Manage jobs, staffs and clients with ease",
            image: businessImg,
        },
    ];

    return (

        <div>
            <div className="flex flex-col justify-center items-center gap-2">
                <div>
                    <LogoHeader/>
                </div>
                <h1 className="text-5xl font-bold =">Who Are You?</h1>
                <p className="text-lg ">Choose the option that best describes you so we can tailor your experience.</p>
            </div>

            <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6 p-6 rounded-lg">

                {roles.map((role) => {
                    const isActive = selectedRole === role.key;
                    return (
                        <div
                            key={role.key}
                            onClick={() => handleSelect(role.key)}
                            className={`flex-1 cursor-pointer border rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-primary-light/10
              ${isActive ? "border-green-600 bg-green-50 shadow-lg" : "border-gray-200 hover:shadow-md"}`}
                        >
                            <Image src={role.image} alt={role.title} width={80} height={80} className="mb-4" />
                            <h3 className="text-lg font-semibold mb-2">{role.title}</h3>
                            <p className="text-gray-600">{role.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
