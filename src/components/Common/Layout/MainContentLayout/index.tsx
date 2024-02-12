import { ReactNode } from "react";
import { mainStyle } from "../Layout.css";

type MainContentLayout = {
  children: ReactNode;
};

const MainContentLayout = ({ children }: MainContentLayout) => {
  return <main className={mainStyle}>{children}</main>;
};

export default MainContentLayout;
