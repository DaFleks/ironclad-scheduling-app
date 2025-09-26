"use client";

import Link from "next/link";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import Form from "./ironclad/Form";
import Container from "./ironclad/Container";
import { FormEvent } from "react";

import { signIn } from "next-auth/react";

const LoginForm = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await signIn("credentials", { email, password, redirectTo: "/" });
  };

  return (
    <Container className="w-1/4 space-y-4 min-w-[200px] max-w-[300px]">
      <Form onSubmit={handleSubmit}>
        <Container className="space-y-2 px-1">
          <Label htmlFor="email" className="sr-only">
            Email
          </Label>
          <Container className="gradient-frame gradient-border-x space-y-2">
            <Input id="email" type="email" name="email" placeholder="Email" className="field-inner" required min="8" />
          </Container>
          <Label htmlFor="password" className="sr-only">
            Password
          </Label>
          <Container className="gradient-frame gradient-border-x space-y-2">
            <Input id="password" type="password" name="password" placeholder="Password" className="field-inner" required min="8" max="32" />
          </Container>
        </Container>
        <Container className="gradient-frame gradient-border-x">
          <Button className="btn-inner cursor-pointer">Log in</Button>
        </Container>
        <Link href="#" className="text-tiny float-start">
          Forgot password?
        </Link>
      </Form>
    </Container>
  );
};

export default LoginForm;
