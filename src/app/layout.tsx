import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chris Parvankin",
  description: "The site for all things Chris Parvankin!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className={inter.className} id="__next">
        <NextUIProvider>
       
        {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
