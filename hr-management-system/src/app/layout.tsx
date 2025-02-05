import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TCS HR Management System",
  description: "AI-Powered HR Management and Recruitment Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased bg-gradient-to-br from-slate-50 to-blue-50`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
