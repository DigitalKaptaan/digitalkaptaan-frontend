import React from "react";
import Image from "next/image";
import Link from "next/link";
import Marketing from "@/styles/blog.module.css";

const MarketingSection = () => {
  return (
    <section className={`${Marketing.blog_section} ${Marketing.bg}`}>
      <div className={Marketing.section_heder}>
        {/* <span className={Marketing.badge}>BLOG LIST</span> */}
        <h2 style={{ paddingBottom: "50px", fontSize: "3rem", fontWeight: "700" }}>
          Read our marketing articles 
          <br />
          <span className={Marketing.higlight}>to know more </span>
        </h2>
      </div>

      <div className={Marketing.blog_cards}>
        <Link href="#" className={Marketing.card_link}>
          <div className={Marketing.card}>
            <div className={Marketing.card_image}>
              <span className={Marketing.tag}>MARKETING</span>
              <Image
                src="https://res.cloudinary.com/ddi1p8sv5/image/upload/v1750957295/images/pzxmr9qlzmrlxumo1s8c.jpg"
                alt="Sample Marketing"
                width={300}
                height={300}
                priority
              />
            </div>
            <h3>How to Improve Your Digital Presence</h3>
            <p className={Marketing.meta}>July 12, 2025</p>
          </div>
        </Link>

        <Link href="#" className={Marketing.card_link}>
          <div className={Marketing.card}>
            <div className={Marketing.card_image}>
              <span className={Marketing.tag}>BUSINESS</span>
              <Image
                src="https://res.cloudinary.com/ddi1p8sv5/image/upload/v1750957295/images/pzxmr9qlzmrlxumo1s8c.jpg"
                alt="Sample Marketing 2"
                width={300}
                height={300}
                priority
              />
            </div>
            <h3>Top 15 Tools for Marketers level in 2025</h3>
            <p className={Marketing.meta}>July 10, 2025</p>
          </div>
        </Link>

        <Link href="#" className={Marketing.card_link}>
          <div className={Marketing.card}>
            <div className={Marketing.card_image}>
              <span className={Marketing.tag}>IT Consulting</span>
              <Image
                src="https://res.cloudinary.com/ddi1p8sv5/image/upload/v1750957295/images/pzxmr9qlzmrlxumo1s8c.jpg"
                alt="Sample Marketing 3"
                width={300}
                height={300}
                priority
              />
            </div>
            <h3>Content Strategies That Actually Work</h3>
            <p className={Marketing.meta}>July 8, 2025</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default MarketingSection;
