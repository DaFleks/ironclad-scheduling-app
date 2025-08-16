"use client";

import { Calendar1Icon, DollarSignIcon, LogOutIcon, ReceiptIcon, UserCircleIcon } from "lucide-react";

import { Separator } from "./ui/separator";

import Container from "./Container";
import NavLink from "./NavLink";

const Navigation = () => {
  return (
    <Container
      as="nav"
      className="w-fit h-fit self-center flex flex-col justify-center gap-4 bg-neutral-800 rounded shadow-lg shadow-neutral-900 border border-neutral-600">
      <NavLink href="#" text="Onboarding" icon={UserCircleIcon} />
      <NavLink href="#" text="Schedule" icon={Calendar1Icon} />
      <NavLink href="#" text="Payments" icon={DollarSignIcon} />
      <NavLink href="#" text="Invoices" icon={ReceiptIcon} />
      <Separator className="my-8 bg-neutral-600" />
      <NavLink href="#" text="Log Out" icon={LogOutIcon} />
    </Container>
  );
};

export default Navigation;