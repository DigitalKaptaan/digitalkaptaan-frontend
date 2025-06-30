import React from "react";
import Image from "next/image";
import about from "@/styles/about.module.css";

type Props = {
  data: {
    headline: string;
    description: string;
    images: string[];
  };
};

const AboutHero: React.FC<Props> = ({ data }) => {
  const { headline, images, description } = data;

  return (
    <section className={about.herobanner}>
      <div className={about.about_us_section}>
        <div className={about.about_us_wrapper}>
          <div className={about.about_us_heading}>
            <span className={about.about_us_tag}>ABOUT US</span>
            <h2 className={about.about_us_title}>{headline}</h2>
          </div>
          <div className={about.about_us_images}>
            {images.map((src, index) => (
              <Image
                key={index}
                className={index === 0 ? about.img1 : about.img2}
                src={src}
                width={550}
                height={550}
                alt={`Team image ${index + 1}`}
                priority
              />
            ))}
          </div>

          <div className={about.optimize_top}>
            <div className={about.optimize_heading}>
              <h2>{description}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
