import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    template: "%s - Degan Check",
    default: "Degan Check",
  },
  description: "Degan Check online shop, Your one stop shop for exotic fresh coconut",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  )
};
