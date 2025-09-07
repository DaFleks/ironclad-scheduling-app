"use client";

import Image from "next/image";

import ironcladLogo from "../public/ironclad-logo.svg";
import Container from "./Container";

const Logo = () => {
  return (
    <Container className="relative w-[90px] h-[118px] mx-auto mt-10 mb-5">
      <Image src={ironcladLogo} fill alt="Ironclad Security Services Logo" className="object-contain" />
    </Container>
  );
};

export default Logo;
