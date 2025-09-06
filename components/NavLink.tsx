"use client";

import { LucideIcon } from "lucide-react";

import Link from "next/link";

import { Button } from "./ui/button";

interface NavLinkProps {
  href: string;
  text?: string;
  icon: LucideIcon;
  onClick?: () => void;
}

const NavLink = ({ href, text, icon: Icon, onClick }: NavLinkProps) => {
  return (
    <Button
      variant="ghost"
      asChild
      className="flex-col h-fit !py-3 !px-1 rounded-sm hover:bg-gray-medium/20 hover:text-font-primary"
      onClick={onClick}>
      <Link href={href} className="space-y-1">
        <Icon className="mx-auto !w-5 !h-5 text-neutral-400" />
        <span className="text-tiny">{text}</span>
      </Link>
    </Button>
  );
};

export default NavLink;
