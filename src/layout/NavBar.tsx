import React, { useState } from "react";
import navStyle from "@/styles/nav.module.css";
import { HamburgerToggle, Logo, NavLinks } from "@/components";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NavMobileLinks } from "@/components/navbar";

type subMenu = {
  external?: boolean;
  label: string;
  url: string;
  order: number;
};

type NavBarProps = {
  menu: {
    children: subMenu[];
    external?: boolean;
    label: string;
    url: string;
    order: number;
  }[];
};

const NavBar: React.FC<NavBarProps> = ({ menu }) => {
  const pathname = usePathname();
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <nav className={navStyle.navbar}>
      <div className={navStyle.nav_container}>
        <Logo />
        <HamburgerToggle
          onClick={() => setSideBarOpen(!sideBarOpen)}
          ariaExpanded={sideBarOpen}
        />

        {sideBarOpen && (
          <div
            className={navStyle.overlay}
            onClick={() => setSideBarOpen(false)}
          />
        )}

        <div
          className={clsx(navStyle.sidebar, navStyle.mobileSidebar, {
            [navStyle.sidebarOpen]: sideBarOpen,
          })}
        >
          <button
            className={navStyle.closeBtn}
            onClick={() => setSideBarOpen(false)}
          >
            ✕
          </button>
          <NavMobileLinks
            menu={menu.sort((a, b) => a.order - b.order) || []}
            pathname={pathname}
          />
        </div>

        <NavLinks
          menu={menu.sort((a, b) => a.order - b.order) || []}
          pathname={pathname}
        />
      </div>
    </nav>
  );
};

export default NavBar;
