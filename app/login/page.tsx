import Container from "@/components/Container";
import LoginForm from "@/components/LoginForm";
import Logo from "@/components/Logo";

const page = () => {
  return (
    <Container className="h-full flex flex-col items-center justify-center">
      <Logo />
      {/* Provider temporary, we can decide how we want to use session at a later point */}

      <LoginForm />
    </Container>
  );
};

export default page;
