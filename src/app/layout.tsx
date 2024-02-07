import type { Metadata } from "next";
import "../styles/global.css";
import * as styles from "./layout.css";
import Navigation from "@/components/Layout/Navigation";

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
      <body className={styles.body}>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <Navigation />
        </footer>
      </body>
    </html>
  );
}
