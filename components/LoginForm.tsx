"use client";

import Link from "next/link";

import { Button } from "./ui/button";

import Form from "./Form";
import AppInput from "./AppInput";

const LoginForm = () => {
  return (
    <div className="w-1/5 border rounded bg-white p-4 shadow">
      {/* Placeholder logo will delete after */}
      <div className="w-[100px] aspect-square bg-red-600 flex items-center justify-center mx-auto mb-4 text-white font-bold rounded">LOGO</div>

      <h3 className="font-bold text-2xl text-center">Login</h3>

      <Form>
        <AppInput id="email" label="Email" type="email" />
        <AppInput id="password" label="Password" type="password" />
        <Link href="#" className="text-xs font-semibold float-end">
          Forgot password?
        </Link>
        <Button className="w-full cursor-pointer">LOGIN</Button>
      </Form>
    </div>
  );
};

export default LoginForm;
