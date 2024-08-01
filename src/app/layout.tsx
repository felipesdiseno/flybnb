"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import Modal from "react-modal";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);
  return (
    <html lang="en">
      <body id="__next" className={inter.className}>
        {children}
      </body>
    </html>
  );
}
