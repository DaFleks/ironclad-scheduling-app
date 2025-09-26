import Container from "@/components/ironclad/Container";
import LoginForm from "@/components/LoginForm";
import Logo from "@/components/Logo";

const page = () => {
  return (
    <Container className="h-full w-full flex flex-col items-center justify-center">
      <Logo />
      {/* SessionProvider temporary, we can decide how we want to use session at a later point */}
      <LoginForm />
    </Container>
  );
};

export default page;
