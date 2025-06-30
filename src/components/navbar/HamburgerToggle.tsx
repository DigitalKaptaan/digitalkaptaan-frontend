import React from "react";
import navStyle from "@/styles/nav.module.css";
const HamburgerToggle = () => (
  <>
    <input type="checkbox" id={navStyle.menu_toggle} />
    <div className={navStyle.hamburger}>☰</div>
  </>
);

export default HamburgerToggle;
