import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from "next/font/google";
import Providers from "@/lib/Providers/Providers";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Charity",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","500","700"],
  variable: "--font-poppins",
  display: "swap"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Providers>
        <Toaster />
        {children}
        </Providers>
      </body>
    </html>
  );
}
