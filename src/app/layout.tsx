import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import { ThemeProvider } from "@emotion/react";

import { createTheme } from '@mui/material/styles';

const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Červené kombo",
  description: "Vaše go-to stránka na všechny statistiky Scratch Wars kartiček",
  openGraph: {
    title: "Červené kombo",
    description: "Vaše go-to stránka na všechny statistiky Scratch Wars kartiček",
    url: "https://cervenekombo.vercel.app",
    siteName: "Červené kombo",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{
        backgroundColor: 'var(--bg)',
      }}>

        <Analytics />
        <NavBar />

        {children}

      </body>
    </html>
  );
}
