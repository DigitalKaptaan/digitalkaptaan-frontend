import React from "react";
import Link from "next/link";
import { MenuItem, SubMenuItem } from "@/types/menu";
import navStyle from "@/styles/nav.module.css";
type Props = {
  menu: MenuItem[];
  pathname: string;
};

const NavMobileLinks: React.FC<Props> = ({ menu, pathname }) => (
  <ul className={navStyle.mobile_nav_links}>
    {menu.map((menuItem, index) => (
      <li className={navStyle.dropdown} key={index}>
        <Link
          href={menuItem.url}
          className={pathname === menuItem.url ? navStyle.active : ""}
        >
          {menuItem.label}
          {menuItem.children?.length > 0 && (
            <span className={navStyle.arrow}>▼</span>
          )}
        </Link>

        {menuItem.children?.length > 0 && (
          <ul className={navStyle.dropdown_menu}>
            <div className={navStyle.dropdown_arrow} />
            {menuItem.children.map((subItem: SubMenuItem, subIndex: number) => (
              <li key={subIndex}>
                <Link
                  href={subItem.url || "#"}
                  className={pathname === subItem.url ? navStyle.active : ""}
                >
                  {subItem.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

export default NavMobileLinks;
