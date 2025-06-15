
import React from "react";
import { Nunito } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar/Navbar";
import ClientsOnly from "./components/ClientsOnly";
import  RegisterModal  from "./components/modals/RegisterModal";
import ToasterProvider from "./Providerrs/ToasterProvider";

export const metadata = {
  title: "Stayfinder",
  description: "Stayfinder is a platform to find places to stay",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientsOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientsOnly>
        {children}
      </body>
    </html>
  );
}
