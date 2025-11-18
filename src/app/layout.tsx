import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logoType2 from "../../public/citn-logo-name.png";
import FormContextProvider from "@/contexts/formContext";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CITN Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FormContextProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="z-0 min-h-screen bg-[url('/citn-logo.png')] bg-center bg-no-repeat">
            <div className="-z-10 min-h-screen backdrop-blur-md outline-2">
              <header className=" h-[20%] md:h-[30%] flex flex-col overflow-hidden">
                <Link href={"/"}>
                  <Image
                    aria-hidden
                    src={logoType2}
                    alt="Background image"
                    className="w-[70%] h-[50%] md:h-[25%] md:w-[25%] object-contain mt-2 ml-5"
                    // objectFit="contain"
                  />
                </Link>
                {/* <div className="h-[50%] md:h-[80%] bg-[#008f47] flex items-center justify-around text-center py-1">
                  <p className="font-bold text-[24px] md:text-[32px] text-[#fff] w-[80%]">
                    CITN Student Exemptions And Examinations
                  </p>
                </div> */}
              </header>
              {children}
            </div>
          </div>
        </body>
      </html>
    </FormContextProvider>
  );
}
