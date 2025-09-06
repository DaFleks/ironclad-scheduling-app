"use client";

import Link from "next/link";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import Form from "./Form";
import Container from "./Container";
import { FormEvent } from "react";

const LoginForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container className="w-1/4 space-y-4 min-w-[200px] max-w-[300px]">
      <Form onSubmit={handleSubmit}>
        <Container noStyle className="space-y-2 px-1">
          <Label htmlFor="email" className="sr-only">
            Email
          </Label>
          <Container noStyle className="gradient-frame gradient-border-x space-y-2 ">
            <Input id="email" type="email" placeholder="Email" className="field-inner" />
          </Container>
          <Label htmlFor="password" className="sr-only">
            Password
          </Label>
          <Container noStyle className="gradient-frame gradient-border-x space-y-2">
            <Input id="password" type="password" placeholder="Password" className="field-inner" />
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
