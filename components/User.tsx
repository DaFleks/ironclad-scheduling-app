"use client";

import { PencilIcon } from "lucide-react";

import { User as UserType } from "@/lib/generated/prisma";

import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import Container from "./Container";
import Heading from "./Heading";
import UserForm from "./UserForm";

import { useToggle } from "@/hooks/useToggle";
import { useState } from "react";
import Text from "./Text";

interface UserProps {
  user?: UserType | null;
}

const User = (props: UserProps) => {
  const [isEditing, handleIsEditing] = useToggle(false);
  const [currentAvatar, setCurrentAvatar] = useState("");

  return (
    <Container className="flex justify-between items-center w-full h-full">
      <Container padded className="w-2/3 h-full flex items-center justify-center">
        <Avatar className="size-38 text-5xl">
          <AvatarImage src={currentAvatar} />
          <AvatarFallback className="bg-gradient-to-r from-neutral-900 to-neutral-700 select-none">?</AvatarFallback>
        </Avatar>
      </Container>
      <Container className="p-8 w-full h-full space-y-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-medium scrollbar-track-black-secondary">
        <Container className="space-y-1">
          <Heading as="h1" variant="section">Personal Info / Verifications</Heading>
          <Text className="text-xs text-font-secondary">Enter User Information</Text>
        </Container>
        <UserForm setCurrentAvatar={setCurrentAvatar} />
      </Container>
    </Container>
  );
};

export default User;
