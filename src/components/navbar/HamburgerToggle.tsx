import React from "react";
import navStyle from "@/styles/nav.module.css";
const HamburgerToggle = () => (
  <>
    <input type="checkbox" id={navStyle.menu_toggle} />
    <label htmlFor="menu-toggle" className={navStyle.hamburger}>
      ☰
    </label>
  </>
);

export default HamburgerToggle;
