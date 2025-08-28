"use client";

import Image from "next/image";

import ironcladLogo from "../public/ironclad-logo.svg";

const Logo = () => {
    return (
        <div className="relative w-[90px] h-[118px] mx-auto mt-10 mb-5">
            <Image src={ironcladLogo} fill alt="Ironclad Security Services Logo" objectFit="contain" />
        </div>);
};

export default Logo;
