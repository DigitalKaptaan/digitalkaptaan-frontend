import React from "react";
import heroStyle from "@/styles/hero.module.css";


type Props = {};

// {heroStyle.font}
// {`${heroStyle.font} ${heroStyle.cdmbdj} `}
const HeroSection = (props: Props) => {
  return (
    <div className={heroStyle.font}>
      <div
        className={
          heroStyle.heroContainer + " " + heroStyle.hero_digital_marketing
        }
      >
        {/* <div className={heroStyle.heroContainer}> */}
        <div className={heroStyle.hero}>
          <h1 className={heroStyle.title}>
            Work with top vetted marketers and grow your business
          </h1>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore
            magna aliqua quis nostrud exerc dolores eos qui ratione
          </p>
          
        </div>
        {/* <div> */}

        <div className={heroStyle.section_img + " " + heroStyle.img_fluid}>
          <div className={heroStyle.icons}>
            <img
              decoding="async"
              src="https://dlterra.droitlab.com/wp-content/uploads/2022/09/Facebook.png"
              alt=""
              className={heroStyle.one + " " + heroStyle.push}
            />
            <img
              decoding="async"
              src="https://dlterra.droitlab.com/wp-content/uploads/2022/09/Snapchat.png"
              alt=""
              className={heroStyle.two + " " + heroStyle.push}
            />
            <img
              decoding="async"
              src="https://dlterra.droitlab.com/wp-content/uploads/2022/09/Line.png"
              alt=""
              className={heroStyle.three + " " + heroStyle.push}  
            />
            <img
              decoding="async"
              src="https://dlterra.droitlab.com/wp-content/uploads/2022/09/Twitter.png"
              alt=""
              className={heroStyle.four + " " + heroStyle.push}
            />
            <img
              decoding="async"
              src="https://dlterra.droitlab.com/wp-content/uploads/2022/09/instagramm.png"
              alt=""
              className={heroStyle.five + " " + heroStyle.push}
            />
            <img
              decoding="async"
              src="https://dlterra.droitlab.com/wp-content/uploads/2022/09/Youtube.png"
              alt=""
              className={heroStyle.six + " " + heroStyle.push}
            />
          </div>
          <div className={heroStyle.img_box}>
            <img
            style={{ width: "100%", height: "100%" }}
              src="/digital-marketing.webp"
              alt="Hero"
              className={heroStyle.heroImage + " " + heroStyle.minn}
            />
            {/* <img decoding="async" src="https://dlterra.droitlab.com/wp-content/uploads/2022/09/digital-marketing.webp" alt="" className="minn" /> */}
          </div>
        </div>

        {/* <div className={heroStyle.imageContainer}>
          <img
            src="/digital-marketing.webp"
            alt="Hero"
            className={heroStyle.heroImage}
          />
        </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
