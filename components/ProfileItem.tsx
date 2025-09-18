"use client";

import { PencilIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

import Container from "./Container";
import Text from "./Text";

interface ProfileItemProps {
  text?: string;
  subText?: string;
  last?: boolean;
}

const ProfileItem = ({ text = "", subText = "", last }: ProfileItemProps) => {
  return (
    <li className="pr-4">
      <Container className="flex items-center gap-4 !px-[0px] p-4">
        <Avatar>
          <AvatarFallback>{text[0]}</AvatarFallback>
        </Avatar>
        <Container className="space-y-1 w-full">
          <Text className="text-sm font-semibold">{text}</Text>
          <Text className="text-xs text-font-secondary">{subText}</Text>
        </Container>
        <Button variant="ghost" className="cursor-pointer hover:bg-gray-medium/20 hover:text-font-primary">
          <PencilIcon />
        </Button>
      </Container>
      {!last && <Separator className="my-2 bg-transparent border border-dotted border-gray-medium box-border" />}
    </li>
  );
};

export default ProfileItem;
