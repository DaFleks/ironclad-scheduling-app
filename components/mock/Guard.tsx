"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SectionTitle from "./SectionTitle";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { Separator } from "../ui/separator";

interface GuardProps {
  name: String;
  hourly: String;
}

const Guard = ({ name, hourly }: GuardProps) => {
  return (
    <div className="flex items-center gap-4 border-b border-neutral-700 p-4">
      <Avatar>
        {/* Image of course would be a prop */}
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <SectionTitle className="w-full" title={name} subTitle={`Hourly: ${hourly}`} />
      <Button className="flex-col h-auto text-neutral-300 cursor-pointer">
        <CalendarIcon />
        <Separator />
        <span>2</span>
      </Button>
      <div className="w-full space-y-2">
        <Button className="w-full cursor-pointer">PAY</Button>
        <p className="text-xs font-semibold text-center">Total: 800.00</p>
      </div>
    </div>
  );
};

export default Guard;
