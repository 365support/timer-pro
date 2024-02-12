import { ReactNode } from "react";
import MainContentLayout from "@/components/Common/Layout/MainContentLayout";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <MainContentLayout>{children}</MainContentLayout>;
};

export default Layout;
