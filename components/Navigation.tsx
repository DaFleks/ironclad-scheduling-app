"use client";

import { usePathname } from "next/navigation";

import { signOut } from "next-auth/react";

import { Calendar, DollarSignIcon, LogOutIcon, WalletCards, UserCircleIcon } from "lucide-react";

import { Separator } from "./ui/separator";

import Container from "./ironclad/Container";
import NavLink from "./NavLink";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <Container className="gradient-frame gradient-border-y !rounded-md">
      <Container
        as="nav"
        className="!p-2 self-center flex flex-col justify-center gap-2 bg-black-secondary rounded-[inherit] shadow-lg shadow-neutral-900">
        <NavLink href="/" text="Profiles" icon={UserCircleIcon} active={pathname == "/"} />
        <NavLink href="/schedule" text="Schedule" icon={Calendar} active={pathname == "/schedule"} />
        <NavLink href="/payments" text="Payments" icon={DollarSignIcon} active={pathname == "/payments"} />
        <NavLink href="/invoices" text="Invoices" icon={WalletCards} active={pathname == "/invoices"} />
        <Separator className="my-8 bg-neutral-600" />
        <NavLink href="#" text="Log Out" icon={LogOutIcon} onClick={signOut} />
      </Container>
    </Container>
  );
};

export default Navigation;
