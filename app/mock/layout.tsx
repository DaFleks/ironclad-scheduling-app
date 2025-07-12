import MainPanel from "@/components/mock/MainPanel";
import Navigation from "@/components/mock/Navigation";

const layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="bg-neutral-600 h-full flex items-center justify-center gap-18 text-neutral-300">
      <Navigation />
      <MainPanel>{children}</MainPanel>
    </div>
  );
};

export default layout;
