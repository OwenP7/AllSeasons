import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://allseasonsbeta.vercel.app"),
  title: "All Seasons Farms",
  description:
    "Premium California cannabis brand. Crafted with purpose, presented with intention.",
  openGraph: {
    title: "All Seasons Farms",
    description:
      "Premium California cannabis brand. Crafted with purpose, presented with intention.",
    url: "/",
    siteName: "All Seasons Farms",
    images: [
      {
        url: "/MediaSources/PassingJointLogo.jpeg",
        width: 1200,
        height: 630,
        alt: "All Seasons lifestyle with brand logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Seasons Farms",
    description:
      "Premium California cannabis brand. Crafted with purpose, presented with intention.",
    images: ["/MediaSources/PassingJointLogo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebas.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
