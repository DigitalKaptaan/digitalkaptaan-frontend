import React from "react";
import { useMenu } from "@/hooks";
import { usePathname } from "next/navigation";
import navStyle from "@/styles/nav.module.css";
import {  HamburgerToggle, Logo, NavLinks } from "@/components";
const NavBar: React.FC = () => {
  const pathname = usePathname();
  const { menu, isLoading, error } = useMenu();

  if (isLoading) return <div>Loading menu...</div>;
  if (error) return <div>Error loading menu</div>;

  return (
    <nav className={navStyle.navbar}>
      <div className={navStyle.nav_container}>
        <Logo />
        <HamburgerToggle />
        <NavLinks menu={menu?.data || []} pathname={pathname} />
      </div>
    </nav>
  );
};

export default NavBar;
