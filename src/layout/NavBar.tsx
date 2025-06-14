import React from "react";
import { useMenu } from "@/hooks";
import { usePathname, useRouter } from "next/navigation";
import navStyle from "@/styles/nav.module.css";
import { Actions, HamburgerToggle, Logo, NavLinks } from "@/components";
const NavBar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { menu, isLoading, error } = useMenu();

  if (isLoading) return <div>Loading menu...</div>;
  if (error) return <div>Error loading menu</div>;

  return (
    <nav className={navStyle.navbar}>
      <div className={navStyle.nav_container}>
        <Logo />
        <HamburgerToggle />
        <NavLinks menu={menu?.data || []} pathname={pathname} />
        <Actions onAction={() => router.push("/")} />
      </div>
    </nav>
  );
};

export default NavBar;
