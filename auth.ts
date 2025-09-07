import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { ZodError } from "zod";

import bcrypt from "bcryptjs";

import { signInSchema } from "./lib/zod";
import prisma from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { name: "email" },
        password: { name: "email" },
      },
      authorize: async (credentials) => {
        let user = null;
        try {
          //  Validate the data provided with Zod
          const { email, password } = await signInSchema.parseAsync(credentials);

          //  Retrieve the user from the DB by passing the unique email through prisma
          user = await prisma.user.findUnique({ where: { email: email } });

          //  Check if the password provided matches the hashed password in the DB
          //  If there's no match, user is removed from the variable (trying to avoid multiple return statements)
          if (!(await bcrypt.compare(password, user!.password))) user = null;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid via Zod
            user = null;
          }
        }
        return user;
      },
    }),
  ],
  session: { strategy: "jwt" }, // or "database" if you prefer
  pages: { signIn: "/login" }, // optional custom page
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as any).role || "user";
      return token;
    },
    async session({ session, token }) {
      session.user.role = (token as any).role;
      return session;
    },
  },
});
