import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lakshmi-priyanka.vercel.app"),

  title: "Lakshmi Priyanka Kotla | Website Developer",
  description:
    "Portfolio of Lakshmi Priyanka Kotla, a WordPress, Elementor, landing page, magazine template, responsive design, and website operations specialist.",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Lakshmi Priyanka Kotla | Website Developer",
    description:
      "WordPress, Elementor, landing pages, magazine templates, responsive fixes, SEO setup, and website operations.",
    url: "https://lakshmi-priyanka.vercel.app",
    siteName: "Lakshmi Priyanka Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lakshmi Priyanka Kotla Website Developer Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lakshmi Priyanka Kotla | Website Developer",
    description:
      "WordPress, Elementor, landing pages, magazine templates, responsive fixes, SEO setup, and website operations.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}