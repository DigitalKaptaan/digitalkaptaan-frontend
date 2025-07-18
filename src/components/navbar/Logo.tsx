import React from "react";
import navStyle from "@/styles/nav.module.css";
import Link from "next/link";
import Image from "next/image";
const Logo = () => (
  <Link href="/" passHref>
    <div className={`${navStyle.logo}`}>
      <div style={{ position: "relative", width: 40, height: 40 }}>
        <Image
          src="/digitalkaptaan_logo.svg"
          alt="digitalkaptaan_logo"
          fill
          priority
        />
      </div>
      <h4 className={navStyle.logoname}>Digital Kaptaan</h4>
    </div>
  </Link>
);

export default Logo;
