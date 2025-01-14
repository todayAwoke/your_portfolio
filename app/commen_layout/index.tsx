"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/home/Navbar/ResponsiveNav";

export default function CommonLayout({children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <>
      {pathName !== "/admin" ? <Navbar /> : null}
      {children}
    </>
  );
}
