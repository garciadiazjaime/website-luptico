import "./globals.css";
import { Roboto as Font } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Font({ subsets: ["latin"], weight: '300' });

export const metadata = {
  title: "Lúptico | Valle de Guadalupe, Baja California, México",
  description: "Lúptico | Valle de Guadalupe, Baja California, México",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
