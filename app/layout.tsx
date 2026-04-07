import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { resume } from "@/data/resume";
import { SiteExperience } from "@/components/site-experience";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: `${resume.name} | Portfolio`,
  description: resume.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background text-foreground">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen cursor-none bg-background font-sans text-foreground antialiased`}
      >
        <SiteExperience>{children}</SiteExperience>
      </body>
    </html>
  );
}
