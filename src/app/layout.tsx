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
  description: "Statistika nuda je, má však cené údaje.",
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
