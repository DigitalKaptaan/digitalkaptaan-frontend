import React from "react";
import navStyle from "@/styles/nav.module.css";

interface Props {
  onClick: () => void;
  ariaExpanded?: boolean;
}

const HamburgerToggle = ({ onClick, ariaExpanded = false }: Props) => (
  <>
    <input
      type="checkbox"
      id={navStyle.menu_toggle}
      aria-expanded={ariaExpanded}
    />
    <div className={navStyle.hamburger} onClick={onClick}>
      ☰
    </div>
  </>
);

export default HamburgerToggle;
