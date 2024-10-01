import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Orientation Scolaire",
  description: "Aide à l'orientation scolaire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full flex-1 overflow-hidden">
        <Header />
        {children}
      </main>
    </div>
  );
}
