import React from "react";
import navStyle from "@/styles/nav.module.css";
import Link from "next/link";
import Image from "next/image";
const Logo = () => (
  <Link href="/">
    <div className={`${navStyle.logo}`}>
      <Image width={10} height={50} src="/terra-logo.svg" alt="Logo" priority />
    </div>
  </Link>
);

export default Logo;
