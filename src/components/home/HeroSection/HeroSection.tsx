import React from "react";
import Image from "next/image";
import heroStyle from "@/styles/hero.module.css";

type HeroData = {
  _id: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  animationIcons: string[];
  buttons: {
    label: string;
    link: string;
    _id: string;
  }[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Props = {
  type: string;
  data: HeroData[];
};

const HeroSection = ({ data }: Props) => {
  const hero = data?.[0];
  if (!hero) return null;

  const { title, subtitle, backgroundImage, animationIcons } = hero;

  const getIconClass = (index: number) => {
    const baseClass = heroStyle.push;
    switch (index) {
      case 0:
        return `${heroStyle.one} ${baseClass}`;
      case 1:
        return `${heroStyle.two} ${baseClass}`;
      case 2:
        return `${heroStyle.four} ${baseClass}`;
      default:
        return `${heroStyle.five} ${baseClass}`;
    }
  };

  return (
    <div className={heroStyle.font}>
      <div
        className={`${heroStyle.heroContainer} ${heroStyle.hero_digital_marketing}`}
      >
        <div className={heroStyle.hero}>
          <h1 className={heroStyle.title}>{title}</h1>
          <p>{subtitle}</p>
        </div>

        <div className={`${heroStyle.section_img} ${heroStyle.img_fluid}`}>
          <div className={heroStyle.icons}>
            {animationIcons.map((icon, i) => (
              <Image
                key={icon}
                src={icon}
                width={60}
                height={70}
                alt={`Icon ${i + 1}`}
                decoding="async"
                className={getIconClass(i)}
              />
            ))}

            {/* <Image
              src="/assets/HomePageBanner/Facebook.png"
              width={40}
              height={60}
              alt="Facebook"
              decoding="async"
              className={`${heroStyle.one} ${heroStyle.push}`}
            />
            <Image
              src="/assets/HomePageBanner/Snapchat.png"
              width={40}
              height={65}
              alt="Snapchat"
              decoding="async"
              className={`${heroStyle.two} ${heroStyle.push}`}
            />
            <Image
              src="/assets/HomePageBanner/Twitter.png"
              width={70}
              height={60}
              alt="Twitter"
              decoding="async"
              className={`${heroStyle.four} ${heroStyle.push}`}
            />
            <Image
              src="/assets/HomePageBanner/instagramm.png"
              width={50}
              height={50}
              alt="Instagram"
              decoding="async"
              className={`${heroStyle.five} ${heroStyle.push}`}
            /> */}
          </div>

          <div className={heroStyle.img_box}>
            <Image
              src={backgroundImage}
              alt="Hero Background"
              width={1500}
              height={300}
              style={{ width: "140%", height: "100%" }}
              className={`${heroStyle.heroImage} ${heroStyle.minn}`}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
