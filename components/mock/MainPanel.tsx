const MainPanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="px-12 py-24 bg-gradient-to-tr from-neutral-900 to-neutral-700 border border-neutral-900 w-2/3 rounded-lg shadow-2xl grid grid-cols-3 gap-4">
      {children}
    </main>
  );
};

export default MainPanel;