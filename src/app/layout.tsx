import type { Metadata } from "next";
import { bodyStyle } from "@/components/Common/Layout/Layout.css";
import "../styles/global.css";

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
      <body className={bodyStyle}>{children}</body>
    </html>
  );
}
