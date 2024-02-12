import { ReactNode } from "react";
import Navigation from "../Navigation";
import { footerStyle, mainStyle } from "../Layout.css";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <main className={mainStyle}>{children}</main>
      <footer className={footerStyle}>
        <Navigation />
      </footer>
    </>
  );
};

export default DefaultLayout;
