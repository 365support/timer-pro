import type { Metadata } from "next";
import "../styles/global.css";
import * as style from "./layout.css";

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
      <body className={style.body}>{children}</body>
    </html>
  );
}
