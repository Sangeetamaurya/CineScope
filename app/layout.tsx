import type { Metadata } from "next";
import Header from "@/components/Header";

import "./globals.css";
import StoreProvider from "./storeProvider";

export const metadata = {
  title: "CineScope",
  description: "Discover movies and explore their details.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
