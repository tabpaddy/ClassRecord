import type { Metadata } from "next";
import {
  Fredoka,
  Geist,
  Geist_Mono,
  Host_Grotesk,
  Inter,
} from "next/font/google";
import "./globals.css";
import { cn } from "./lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fredoka",
});

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-host-grotesk",
});

export const metadata: Metadata = {
  title: "ClassRecord",
  description:
    "ClassRecord is a modern, responsive web platform designed for school management and student engagement in emerging markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hostGrotesk.variable} ${fredoka.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
