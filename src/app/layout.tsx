import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Kreate Studio - Digital Agency",
  description: "Transform your digital presence with Kreate Studio",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${urbanist.className} antialiased`}>
        <Navbar />
        <main className="pt-20">
        {children}
        </main>
      </body>
    </html>
  );
}
