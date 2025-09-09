"use client";

import Link from "next/link";

import { CirclePlusIcon } from "lucide-react";

import Container from "./Container";
import HeadingText from "./HeadingText";
import Debossed from "./Debossed";

interface ProfileProps {
  title?: string;
  total?: string | number;
  children: React.ReactNode;
}

const Profile = (props: ProfileProps) => {
  return (
    <Container noStyle className="w-full px-[0px] mx-5 overflow-y-hidden bg-transparent flex flex-col justify-between gap-4">
      <Container noStyle className="space-y-2 mb-8">
        <HeadingText as="h4">{props.title}</HeadingText>
        <Container noStyle className="text-xs text-font-secondary flex items-center gap-2">
          Register new {props.title?.toLowerCase().slice(0, -1)}
          <Link href={`${props.title?.toLowerCase()}/add`} className="rounded-full bg-green-medium">
            <CirclePlusIcon size="14px" className="text-black-primary" />
          </Link>
        </Container>
      </Container>
      <Container noStyle className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-medium scrollbar-track-black-secondary grow p-0">
        {props.children}
      </Container>
      <Debossed>
        <Container as="p" className="w-full p-4 px-8 text-end text-xs font-bold">
          Total {props.title}:&#160;
          <Container as="span" noStyle className="text-font-secondary">
            {props.total}
          </Container>
        </Container>
      </Debossed>
    </Container>
  );
};

export default Profile;
