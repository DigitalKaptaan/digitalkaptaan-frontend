import React from "react";
import heroStyle from "@/styles/hero.module.css";
type Props = {};

// {heroStyle.font}
// {`${heroStyle.font} ${heroStyle.cdmbdj} `}
const HeroSection = (props: Props) => {
  return <div className={heroStyle.font}>HeroSection</div>;
};

export default HeroSection;
