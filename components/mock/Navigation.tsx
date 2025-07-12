"use client";

import { CalculatorIcon, CogIcon, UserCircle } from "lucide-react";
import NavButton from "./NavButton";
import { Button } from "../ui/button";

const Navigation = () => {
  return (
    <nav className=" flex flex-col w-fit border border-neutral-900 rounded-lg shadow-2xl bg-neutral-800 text-neutral-300 gap-4 p-2">
      <NavButton icon={CalculatorIcon} text="Calendar" />
      <NavButton icon={UserCircle} text="Staff" />
      <NavButton icon={CogIcon} text="Settings" />
    </nav>
  );
};

export default Navigation;
