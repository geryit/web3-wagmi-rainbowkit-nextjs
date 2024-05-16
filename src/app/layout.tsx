import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { headers } from "next/headers";

import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Web3 | Rainbowkit + Wagmi + Nextjs",
  description: "Web3 | Rainbowkit + Wagmi + Nextjs Cryptocurrency App",
  icons: {
    icon: "/rainbow.png",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = headers().get("cookie");

  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-white`}>
        <Providers cookie={cookie}>{children}</Providers>
      </body>
    </html>
  );
}
