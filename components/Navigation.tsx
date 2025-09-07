"use client";

import { Calendar, DollarSignIcon, LogOutIcon, WalletCards, UserCircleIcon } from "lucide-react";

import { Separator } from "./ui/separator";

import Container from "./Container";
import NavLink from "./NavLink";
import { signOut } from "next-auth/react";

const Navigation = () => {
  return (
    <Container noStyle className="gradient-frame gradient-border-y !rounded-md">
      <Container
        as="nav"
        className="!p-2 self-center flex flex-col justify-center gap-2 bg-black-secondary rounded-[inherit] shadow-lg shadow-neutral-900">
        <NavLink href="#" text="Profiles" icon={UserCircleIcon} />
        <NavLink href="#" text="Schedule" icon={Calendar} />
        <NavLink href="#" text="Payments" icon={DollarSignIcon} />
        <NavLink href="#" text="Invoices" icon={WalletCards} />
        <Separator className="my-8 bg-neutral-600" />
        <NavLink href="#" text="Log Out" icon={LogOutIcon} onClick={signOut} />
      </Container>
    </Container>
  );
};

export default Navigation;
