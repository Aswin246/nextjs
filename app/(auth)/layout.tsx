export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>20% off</div>
      {children}
    </>
  );
}
