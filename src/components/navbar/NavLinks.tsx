import React from "react";
import Link from "next/link";
import { MenuItem, SubMenuItem } from "@/types/menu";
import navStyle from "@/styles/nav.module.css";
type Props = {
  menu: MenuItem[];
  pathname: string;
};

const NavLinks: React.FC<Props> = ({ menu, pathname }) => (
  <ul className={navStyle.nav_links}>
    {menu.map((menuItem, index) => (
      <li className={navStyle.dropdown} key={index}>
        <Link
          href={menuItem.link}
          className={pathname === menuItem.link ? navStyle.active : ""}
        >
          {menuItem.label}
          {menuItem.submenu?.length > 0 && (
            <span className={navStyle.arrow}>▼</span>
          )}
        </Link>

        {menuItem.submenu?.length > 0 && (
          <ul className={navStyle.dropdown_menu}>
            <div className={navStyle.dropdown_arrow} />
            {menuItem.submenu.map((subItem: SubMenuItem, subIndex: number) => (
              <li key={subIndex}>
                <Link
                  href={subItem.link || "#"}
                  className={pathname === subItem.link ? navStyle.active : ""}
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

export default NavLinks;
