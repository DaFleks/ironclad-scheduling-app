import User from "@/components/User";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  return <User></User>;
};

export default page;
