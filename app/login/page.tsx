import Container from "@/components/Container";
import LoginForm from "@/components/LoginForm";
import Logo from "@/components/Logo";

const page = () => {
  return (
    <Container className="h-full flex flex-col items-center justify-center">
      <Logo />
      <LoginForm />
    </Container>
  );
};

export default page;
