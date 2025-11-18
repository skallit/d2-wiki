export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <h2>Test</h2>
      {children}
    </main>
  );
}
