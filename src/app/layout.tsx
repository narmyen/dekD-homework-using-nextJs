import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans_Thai } from 'next/font/google'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const ibmPlexSans = IBM_Plex_Sans_Thai({
  subsets: ['latin', 'thai'], // รองรับภาษาไทย
  weight: ['400', '600', '700'], // น้ำหนักของฟอนต์
  style: ['normal'], // รูปแบบปกติและตัวเอียง
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.className} text-[14px] antialiased`}>
        {children}
      </body>
    </html>
  );
}
