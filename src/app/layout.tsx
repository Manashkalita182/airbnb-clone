import React from "react";
import { Nunito } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar/Navbar";
import ClientsOnly from "./components/ClientsOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./Providerrs/ToasterProvider";
; // fixed spelling in the path
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata = {
  title: "Stayfinder",
  description: "Stayfinder is a platform to find places to stay",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientsOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientsOnly>
        {children}
      </body>
    </html>
  );
}
