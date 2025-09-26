"use client";

import Link from "next/link";

import { CirclePlusIcon } from "lucide-react";

import Container from "./Container";
import Heading from "./Heading";
import Debossed from "./Debossed";
import Text from "./Text";

interface ProfileProps {
  title?: string;
  total?: string | number;
  children: React.ReactNode;
}

const Profile = (props: ProfileProps) => {
  return (
    <Container className="w-full px-[0px] mx-5 overflow-y-hidden bg-transparent flex flex-col justify-between gap-4">
      <Container className="space-y-2 mb-8">
        <Heading as="h1" className="text-blue-50 opacity-30">{props.title}</Heading>
        <Container className="text-xs text-font-secondary flex items-center gap-2">
          Register new {props.title?.toLowerCase().slice(0, -1)}
          <Link href={`${props.title?.toLowerCase()}/add`} className="rounded-full bg-green-medium">
            <CirclePlusIcon size="14px" className="text-black-primary" />
          </Link>
        </Container>
      </Container>
      <ul className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-medium scrollbar-track-black-secondary grow p-0">
        {props.children}
      </ul>
      <Debossed>
        <Text as="p" className="w-full p-4 px-8 text-end text-xs font-bold">
          Total {props.title}:&#160;
          <Text as="span" className="text-font-secondary">
            {props.total}
          </Text>
        </Text>
      </Debossed>
    </Container>
  );
};

export default Profile;
