import { HTMLAttributes, ReactNode } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import * as style from "./index.css";

type NavItemProps = {
  children: ReactNode;
  route: string;
} & HTMLAttributes<HTMLButtonElement>;

export default function NavRoute({ children, route, className }: NavItemProps) {
  const router = useRouter();

  return (
    <button
      className={clsx(style.navItem, className)}
      onClick={() => router.push(route)}
    >
      {children}
    </button>
  );
}
