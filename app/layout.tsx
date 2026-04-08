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

const siteTitle = `${resume.name} | ${resume.title}`;
const siteDescription = `Portfolio of ${resume.name}, ${resume.title}.`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
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
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[2] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.08),transparent_26%)]"
        />
        <div aria-hidden="true" className="site-noise pointer-events-none fixed inset-0 z-[3]" />
        <SiteExperience>{children}</SiteExperience>
      </body>
    </html>
  );
}
