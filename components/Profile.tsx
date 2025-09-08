"use client";

import { CirclePlusIcon } from "lucide-react";
import Container from "./Container";
import HeadingText from "./HeadingText";
import Link from "next/link";
import Debossed from "./Debossed";

interface ProfileProps {
  title?: string;
  children?: React.ReactNode;
  total?: number;
}

const Profile = ({ title, children, total = 0 }: ProfileProps) => {
  return (
    <Container noStyle className="w-full px-[0px] mx-5 overflow-y-hidden bg-transparent flex flex-col justify-between gap-4">
      <Container noStyle className="space-y-2 mb-8">
        <HeadingText as="h4">{title}</HeadingText>
        <Container noStyle className="text-xs text-font-secondary flex items-center gap-2">
          Register new {title?.toLowerCase().slice(0, -1)}
          <Link href={`${title?.toLowerCase()}/add`} className="rounded-full bg-green-medium">
            <CirclePlusIcon size="14px" className="text-black-primary" />
          </Link>
        </Container>
      </Container>
      <Container noStyle className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-medium scrollbar-track-black-secondary grow p-0">
        {children}
      </Container>
      <Debossed>
        <Container as="p" className="w-full p-4 px-8 text-end text-xs font-bold">
          Total {title}:
          <Container as="span" noStyle className="text-font-secondary">
            {total}
          </Container>
        </Container>
      </Debossed>
    </Container>
  );
};

export default Profile;
