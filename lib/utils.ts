import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function checkIsLastItem(currentIndex: number, arrLength: number) {
  return currentIndex < arrLength - 1 ? false : true;
}