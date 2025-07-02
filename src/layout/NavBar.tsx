import React from "react";
import navStyle from "@/styles/nav.module.css";
import { HamburgerToggle, Logo, NavLinks } from "@/components";
import { usePathname } from "next/navigation";

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
  return (
    <nav className={navStyle.navbar}>
      <div className={navStyle.nav_container}>
        <Logo />
        <HamburgerToggle />
        <NavLinks
          menu={menu.sort((a, b) => a.order - b.order) || []}
          pathname={pathname}
        />
      </div>
    </nav>
  );
};

export default NavBar;
