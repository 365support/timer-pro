"use client";
import { usePathname } from "next/navigation";
import { Hourglass } from "@/components/Icons";
import {
  NAV_ITEMS_FIRST_GROUP,
  NAV_ITEMS_SECOND_GROUP,
} from "@/constants/constants";
import NavRoute from "./NavRoute";
import NavItem from "./NavItem";
import * as style from "./index.css";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={style.navContainer}>
      {NAV_ITEMS_FIRST_GROUP.map(({ route, icon: Icon, label }) => (
        <NavRoute route={route} key={route}>
          <NavItem Icon={Icon} label={label} isActive={pathname === route} />
        </NavRoute>
      ))}

      <NavRoute route="/" className={style.centerIconWrapper}>
        <div className={style.centerIconBox}>
          <Hourglass color="black" width="25" height="24" />
        </div>
      </NavRoute>

      {NAV_ITEMS_SECOND_GROUP.map(({ route, icon: Icon, label }) => (
        <NavRoute route={route} key={route}>
          <NavItem Icon={Icon} label={label} isActive={pathname === route} />
        </NavRoute>
      ))}
    </nav>
  );
};

export default Navigation;
