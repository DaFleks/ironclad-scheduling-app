import Container from "./Container";
import { auth } from "../auth";

const MainPanel = async ({ children }: { children?: React.ReactNode }) => {
  //  The session flag to see if user is logged in or not
  const session = await auth();

  return (
    <Container id="main-panel-container" as="main" className={`relative bg-black-primary ${session ? 'w-[90%] xl:h-[90%]' : 'w-[90%] md:w-[70%] border border-neutral-600'} h-3/4 shadow-lg shadow-neutral-900 rounded`}>
      <Container noStyle className="!overflow-y-hidden h-full w-full flex flex-col">
        {children}
      </Container>
    </Container>
  );
};

export default MainPanel;
