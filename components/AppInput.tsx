"use client";

import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface AppInputProps {
  label?: string;
  id: string;
  type: string;
}

const AppInput = ({ label, id, type }: AppInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} />
    </div>
  );
};

export default AppInput;