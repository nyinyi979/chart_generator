import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chart Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/app/favicon.ico" />
      <body className={`${inter.className} bg-graident-to-b from-gray-50 to-gray-200 w-full h-full overflow-x-auto pb-10`}>{children}</body>
    </html>
  );
}
