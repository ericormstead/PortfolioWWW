import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const siteUrl = "https://eric-ormstead-portfolio.eric-m-ormstead.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Eric Ormstead | Technical & Delivery Leader",
  description: "Technical and delivery leadership built on a decade-plus Office Depot engineering foundation and expanded through Accenture enterprise delivery.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Eric Ormstead | Technical & Delivery Leader",
    description: "A decade-plus engineering foundation. Leadership forward across complex enterprise delivery.",
    url: siteUrl,
    type: "website",
    images: [{ url: `${siteUrl}/og.png`, width: 1732, height: 909, alt: "Eric Ormstead - Engineering foundation. Leadership forward." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Ormstead | Technical & Delivery Leader",
    description: "A decade-plus engineering foundation. Leadership forward across complex enterprise delivery.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
