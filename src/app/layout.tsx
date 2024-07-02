import type { Metadata } from "next";
import "@/styles/globals.css";
import { poppins } from "@/lib/fonts";
import { cn } from "@/utils/helpers";

export const metadata: Metadata = {
  title: "Doctors List App",
  description:
    "This app provides a list of doctors and the ability to sort them based on their likes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className)}>{children}</body>
    </html>
  );
}
