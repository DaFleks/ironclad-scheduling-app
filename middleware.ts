// middleware.ts
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  // If user is not authenticated and not already on /login
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    const loginUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }
});

//  Excluding API routes as we only want redirect occurring when trying to access a page.
export const config = {
  matcher: ["/((?!_next|favicon.ico|api).*)"],
};
