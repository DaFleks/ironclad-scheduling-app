import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export const addUser = async (formData: FormData) => {
  const response = await fetch("/api/users", { method: "POST", body: formData });
};

export const getAllUsers = async (cookieStore: ReadonlyRequestCookies) => {
  const response = await fetch("http://localhost:3000/api/users", {
    method: "GET",
    credentials: "include",
    headers: { Cookie: cookieStore.toString() },
  });
  const data = await response.json();
  return data;
};
