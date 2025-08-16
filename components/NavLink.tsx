"use client";

import { LucideIcon } from "lucide-react";

import Link from "next/link";

import { Button } from "./ui/button";

interface NavLinkProps {
  href: string;
  text?: string;
  icon: LucideIcon;
}

const NavLink = ({ href, text, icon: Icon }: NavLinkProps) => {
  return (
    <Button variant="ghost" asChild className="flex-col h-fit aspect-square !p-2 hover:bg-neutral-700 hover:text-white">
      <Link href={href} className="space-y-1">
        <Icon className="mx-auto !w-8 !h-8 text-neutral-400" />
        <span className="text-xs">{text}</span>
      </Link>
    </Button>
  );
};

export default NavLink;
