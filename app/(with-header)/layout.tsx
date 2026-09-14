import Header from "@/components/Header";
import StoreProvider from "../storeProvider";

export default function HeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoreProvider>
        <Header />
        {children}
      </StoreProvider>
    </>
  );
}
