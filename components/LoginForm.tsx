"use client";

import Link from "next/link";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import Form from "./Form";
import Container from "./Container";

const LoginForm = () => {
  return (
    <Container className="w-1/4 space-y-4 min-w-[200px] max-w-[300px]">
      <Form>
        <div className="space-y-2 px-1">
          <Label htmlFor="email" className="sr-only">Email</Label>
          <div className="gradient-frame gradient-border-x space-y-2 ">
            <Input id="email" type="email" placeholder="Email" className="field-inner" />
          </div>
          <Label htmlFor="password" className="sr-only">Password</Label>
          <div className="gradient-frame gradient-border-x space-y-2">
            <Input id="password" type="password" placeholder="Password" className="field-inner" />
          </div>
        </div>
        <div className="gradient-frame gradient-border-x">
          <Button className="btn-inner cursor-pointer">Log in</Button>
        </div>
        <Link href="#" className="text-tiny float-start">
          Forgot password?
        </Link>
      </Form>
    </Container>
  );
};

export default LoginForm;
