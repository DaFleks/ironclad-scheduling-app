import { cookies } from "next/headers";

// Front-end cookie store to use to authorize backend API requests
const cookieStore = await cookies();

export const addUser = async (formData: FormData) => {
  const response = await fetch("/api/users", { method: "POST", body: formData });
  const data = await response.json();
  return data;
};

export const getAllUsers = async () => {
  const response = await fetch("http://localhost:3000/api/users", {
    method: "GET",
    credentials: "include",
    headers: { Cookie: cookieStore.toString() },
  });
  const data = await response.json();
  return data;
};
