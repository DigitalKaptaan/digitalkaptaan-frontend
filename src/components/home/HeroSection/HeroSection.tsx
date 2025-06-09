import React from 'react';
import heroStyle from "@/styles/hero.module.css";
import Image from 'next/image';


const HeroSection = () => {
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
              <Image width={40} height={60}
                decoding="async"
                src="/assets/HomePageBanner/Facebook.png"
                alt=""
                className={heroStyle.one + " " + heroStyle.push}
              />
              <Image width={40} height={65}
                decoding="async"
                src="/assets/HomePageBanner/Snapchat.png"
                alt=""
                className={heroStyle.two + " " + heroStyle.push}
              />
              {/* <Image width={40} height={40}
                decoding="async"
                src="/assets/HomePageBanner/Line.png"
                alt=""
                className={heroStyle.three + " " + heroStyle.push}  
              /> */}
              <Image width={70} height={60}
                decoding="async"
                src="/assets/HomePageBanner/Twitter.png"
                alt=""
                className={heroStyle.four + " " + heroStyle.push}
              />
              <Image width={50} height={50}
                decoding="async"
                src="/assets/HomePageBanner/instagramm.png"
                alt=""
                className={heroStyle.five + " " + heroStyle.push}
              />
              {/* <Image width={50} height={70}
                decoding="async"
                src="/assets/HomePageBanner/Youtube.png"
                alt=""
                className={heroStyle.six + " " + heroStyle.push}
              /> */}
            </div>
            <div className={heroStyle.img_box}>
              <Image width={1500} height={300}
              style={{ width: "140%", height: "100%"}}
                src="/digital-marketing.webp"
                alt="Hero"
                className={heroStyle.heroImage + " " + heroStyle.minn}
              />
              {/* <Image width={100} height={100} decoding="async" src="https://dlterra.droitlab.com/wp-content/uploads/2022/09/digital-marketing.webp" alt="" className="minn" /> */}
            </div>
          </div>
  
          {/* <div className={heroStyle.imageContainer}>
            <Image width={100} height={100}
              src="/digital-marketing.webp"
              alt="Hero"
              className={heroStyle.heroImage}
            />
          </div> */}
          {/* </div> */}
        </div>
      </div>
    );
}

export default HeroSection
