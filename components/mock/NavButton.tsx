"use client";

import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";

interface NavButtonProps {
  icon: LucideIcon;
  text: string;
}

const NavButton = ({ icon: Icon, text }: NavButtonProps) => {
  return (
    <Button variant="ghost" className="flex-col h-auto aspect-[1/2] text-xs cursor-pointer">
      <Icon />
      {text}
    </Button>
  );
};

export default NavButton;
