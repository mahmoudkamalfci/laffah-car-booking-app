import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
const ibm = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "لَفّة",
  description: "احجز سيارتك في مصر بسهولة وأمان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`min-h-screen bg-background font-sans antialiased ${ibm.className}`}
      >
        <Navbar />
        <main className="pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
