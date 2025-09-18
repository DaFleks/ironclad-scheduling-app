import { auth } from "@/auth";
import User from "@/components/User";

const page = async () => {
  const session = await auth();
  console.log(session);
  return <User></User>;
};

export default page;
