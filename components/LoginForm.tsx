"use client";

import Link from "next/link";

import { Button } from "./ui/button";

import Form from "./Form";
import AppInput from "./AppInput";
import Container from "./Container";
import Image from "next/image";

import ironcladLogo from "../public/ironclad-logo.svg";

const LoginForm = () => {
  return (
    <Container className="w-1/4 space-y-4">
      {/* Logo */}
      <div className="relative aspect-square">
        <Image src={ironcladLogo} fill alt="Iron Clad Security Logo" objectFit="contain" className="pr-4 py-4" />
      </div>

      <Form>
        <AppInput id="email" label="Email" type="email" />
        <AppInput id="password" label="Password" type="password" />
        <Link href="#" className="text-xs font-semibold float-end">
          Forgot password?
        </Link>
        <Button className="w-full cursor-pointer">LOGIN</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
