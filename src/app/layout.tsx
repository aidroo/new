import Fotter from "@/components/footer/Fotter";
import MainMenu from "@/components/header/MainMenu";
import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins font
// import localFont from "next/font/local";
import "./globals.css";

// Load Geist Sans and Geist Mono fonts locally
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// Load Poppins font from Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"], // Customize weights as needed
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
      <body
        className={`  ${poppins.variable}  antialiased bg-slate-50`} // Add poppins.variable class
      >
        <div className="max-w-4xl mx-auto">
          <MainMenu />
          {children}
          <Fotter />
        </div>
      </body>
    </html>
  );
}
