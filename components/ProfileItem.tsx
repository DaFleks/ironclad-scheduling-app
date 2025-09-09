"use client";

import { PencilIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

import Container from "./Container";

interface ProfileItemProps {
  text?: string;
  subText?: string;
  last?: boolean;
}

const ProfileItem = ({ text = "", subText = "", last }: ProfileItemProps) => {
  return (
    <Container noStyle as="li" className="pr-4">
      <Container className="flex items-center gap-4 !px-[0px]">
        <Avatar>
          <AvatarFallback>{text[0]}</AvatarFallback>
        </Avatar>
        <Container noStyle className="space-y-1 w-full">
          <p className="text-sm font-semibold">{text}</p>
          <p className="text-xs text-font-secondary">{subText}</p>
        </Container>
        <Button variant="ghost" className="cursor-pointer hover:bg-gray-medium/20 hover:text-font-primary">
          <PencilIcon />
        </Button>
      </Container>
      {!last && <Separator className="my-2 bg-transparent border border-dotted border-gray-medium box-border" />}
    </Container>
  );
};

export default ProfileItem;
