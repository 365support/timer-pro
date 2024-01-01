import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "../styles/global.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Timer Pro",
  description: "Tabata timer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
