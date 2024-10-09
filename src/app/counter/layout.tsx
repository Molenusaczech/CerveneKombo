import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createTheme } from '@mui/material/styles';

const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react"
import { NavBar } from "@/components/component/nav-bar";
import "../(root)/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Červené kombo",
  description: "Vaše go-to stránka na všechny statistiky Scratch Wars kartiček",
  openGraph: {
    title: "Červené kombo",
    description: "Vaše go-to stránka na všechny statistiky Scratch Wars kartiček",
    url: "https://ck.mole.lol",
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
      <body>
        {children}
      </body>
    </html>
  );
}
