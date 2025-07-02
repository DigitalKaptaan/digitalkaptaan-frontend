import React from "react";
import Image from "next/image";
import heroStyle from "@/styles/hero.module.css";

type HeroData = {
  headline: string;
  description: string;
  imageUrl: string;
  cta?: string;
  animationIcons: string[];
};

type Props = {
  data: HeroData;
};

const HeroSection = ({ data }: Props) => {
  const { description, headline, imageUrl } = data;

  // const getIconClass = (index: number) => {
  //   const baseClass = heroStyle.push;
  //   switch (index) {
  //     case 0:
  //       return `${heroStyle.one} ${baseClass}`;
  //     case 1:
  //       return `${heroStyle.two} ${baseClass}`;
  //     case 2:
  //       return `${heroStyle.four} ${baseClass}`;
  //     default:
  //       return `${heroStyle.five} ${baseClass}`;
  //   }
  // };

  return (
    <div className={heroStyle.font}>
      <div
        className={`${heroStyle.heroContainer} ${heroStyle.hero_digital_marketing}`}
      >
        <div className={heroStyle.hero}>
          <h1 className={heroStyle.title}>{headline}</h1>
          <p>{description}</p>
        </div>

        <div className={`${heroStyle.section_img} ${heroStyle.img_fluid}`}>
          <div className={heroStyle.icons}></div>

          <div className={heroStyle.img_box}>
            <Image
              src={
                imageUrl ??
                "https://dlterra.droitlab.com/wp-content/uploads/2022/09/digital-marketing.webp"
              }
              alt="Hero Background"
              width={1500}
              height={300}
              className={`${heroStyle.heroImage}`} // Removed .minn unless you need it
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
