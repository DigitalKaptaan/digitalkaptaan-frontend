import React from "react";
import navStyle from "@/styles/nav.module.css";
import Link from "next/link";
const Logo = () => (
  <Link href="/">
  <div className={`${navStyle.logo}`}>
    <img src="/terra-logo.svg" alt="Logo" />
  </div>
  </Link>
);

export default Logo;
