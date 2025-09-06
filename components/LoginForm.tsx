"use client";

import Link from "next/link";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import Form from "./Form";
import Container from "./Container";
import { FormEvent } from "react";

import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const LoginForm = () => {
  //  useSession just temporary for debug purposes, we can decide how we want to proceed a later point
  const { data: session } = useSession();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    signIn("credentials", { email, password });
  };

  return (
    <Container className="w-1/4 space-y-4 min-w-[200px] max-w-[300px]">
      {session ? <h1>LOGGED IN</h1> : <h1>LOGGED OUT</h1>}
      <Form onSubmit={handleSubmit}>
        <Container noStyle className="space-y-2 px-1">
          <Label htmlFor="email" className="sr-only">
            Email
          </Label>
          <Container noStyle className="gradient-frame gradient-border-x space-y-2 ">
            <Input id="email" type="email" name="email" placeholder="Email" className="field-inner" />
          </Container>
          <Label htmlFor="password" className="sr-only">
            Password
          </Label>
          <Container noStyle className="gradient-frame gradient-border-x space-y-2">
            <Input id="password" type="password" name="password" placeholder="Password" className="field-inner" />
          </Container>
        </Container>
        <Container noStyle className="gradient-frame gradient-border-x">
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
