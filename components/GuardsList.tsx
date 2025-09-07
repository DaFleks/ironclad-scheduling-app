"use client";

import { PencilIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

import Container from "./Container";
import Profile from "./Profile";

const GuardsList = ({ guards }: { guards: { id: Number; userAvatar: String; name: String; hourly: Number }[] }) => {
  return (
    <Profile title="Guards" total={guards.length}>
      <Container noStyle as="ul">
        {guards.map((guard, i) => (
          <Container noStyle as="li" key={guard.id.toString()} className="pr-4">
            <Container className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Container noStyle className="space-y-1 w-full">
                <p className="font-semibold">{guard.name}</p>
                <p className="text-xs text-font-secondary">Hourly: ${guard.hourly.toFixed(2)}</p>
              </Container>
              <Button variant="ghost" className="cursor-pointer hover:bg-gray-medium/20 hover:text-font-primary">
                <PencilIcon />
              </Button>
            </Container>
            {i !== guards.length - 1 && <Separator className="my-4 bg-gray-medium" />}
          </Container>
        ))}
      </Container>
    </Profile>
  );
};

export default GuardsList;
