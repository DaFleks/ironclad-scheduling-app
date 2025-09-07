"use client";

import { PlusCircleIcon } from "lucide-react";
import Container from "./Container";
import HeadingText from "./HeadingText";
import { Button } from "./ui/button";
import Link from "next/link";

interface ProfileProps {
  title?: string;
  children?: React.ReactNode;
  total?: number;
}

const Profile = ({ title, children, total = 0 }: ProfileProps) => {
  return (
    <Container className="h-full w-full gradient-frame gradient-border-y overflow-y-hidden">
      <Container className="h-full w-full p-8 bg-black-secondary shadow-lg shadow-neutral-900 flex flex-col justify-between gap-4">
        <Container noStyle className="space-y-2">
          <HeadingText as="h4">{title}</HeadingText>
          <Container noStyle className="text-xs text-font-secondary flex items-center gap-2">
            Register new {title?.toLowerCase().slice(0, -1)}
            <Link href={`${title?.toLowerCase()}/add`}>
              <PlusCircleIcon className="text-emerald-500" />
            </Link>
          </Container>
        </Container>
        <Container noStyle className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-medium scrollbar-track-black-secondary grow p-0">
          {children}
        </Container>
        <Container as="p" className="w-full text-end text-xs font-bold">
          Total {title}: {total}
        </Container>
      </Container>
    </Container>
  );
};

export default Profile;
