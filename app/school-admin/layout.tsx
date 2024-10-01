import type { Metadata } from "next";
import "../globals.css";
import SidebarSchoolAdmin from "@/components/layout/sidebar-school-admin";
import HeaderSchoolAdmin from "@/components/layout/header-school-admin";

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
      <SidebarSchoolAdmin />
      <main className="w-full flex-1 overflow-hidden">
        <HeaderSchoolAdmin />
        {children}
      </main>
    </div>
  );
}
