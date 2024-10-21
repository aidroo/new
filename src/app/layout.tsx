import Fotter from "@/components/footer/Fotter";
import MainMenu from "@/components/header/MainMenu";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Load Poppins font from Google Fonts

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "600"],
});

export const metadata: Metadata = {
  title: "Boltflash",
  description: "Boltflash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  bg-slate-50`}>
        <div className="max-w-4xl mx-auto">
          <MainMenu />
          {children}
          <Fotter />
        </div>
      </body>
    </html>
  );
}
