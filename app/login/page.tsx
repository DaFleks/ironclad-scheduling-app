import Container from "@/components/Container";
import LoginForm from "@/components/LoginForm";
import Logo from "@/components/Logo";
import { SessionProvider } from "next-auth/react";

const page = () => {
  return (
    <Container className="h-full flex flex-col items-center justify-center">
      <Logo />
      {/* Provider temporary, we can decide how we want to use session at a later point */}
      <SessionProvider>
        <LoginForm />
      </SessionProvider>
    </Container>
  );
};

export default page;
