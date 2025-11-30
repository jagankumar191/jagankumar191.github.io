import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jagan Kumar | Full Stack Developer",
  description: "Personal portfolio of Jagan Kumar, a Full Stack Developer specializing in Backend, Frontend, and DevOps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "bg-background text-foreground antialiased")}>
        {children}
      </body>
    </html>
  );
}
