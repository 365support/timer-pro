"use client";
import { usePathname } from "next/navigation";
import { Hourglass } from "@/components/Common/Icons";
import {
  NAV_ITEMS_FIRST_GROUP,
  NAV_ITEMS_SECOND_GROUP,
} from "@/constants/constants";
import NavRoute from "./NavRoute";
import NavItem from "./NavItem";
import * as styles from "./index.css";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navContainer}>
      {NAV_ITEMS_FIRST_GROUP.map(({ route, icon: Icon, label }) => (
        <NavRoute route={route} key={route}>
          <NavItem Icon={Icon} label={label} isActive={pathname === route} />
        </NavRoute>
      ))}

      <NavRoute route="/" className={styles.centerIconWrapper}>
        <div className={styles.centerIconBox}>
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
