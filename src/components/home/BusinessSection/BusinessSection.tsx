import React from "react";
import styles from "@/styles/Business.module.css";
import Image from "next/image";

const listData = [
  {
    image: "/assets/dm_info1.png",
    title: "Look great & sell more",
    paragraph: "Consectetur elit sed do tempor adipiscing usmo incididunt",
  },
  {
    image: "/assets/dm_info2.png",
    title: "Look great & sell more",
    paragraph: "Consectetur elit sed do tempor adipiscing usmo incididunt",
  },
  {
    image: "/assets/dm_info3.png",
    title: "Look great & sell more",
    paragraph: "Consectetur elit sed do tempor adipiscing usmo incididunt",
  },
  {
    image: "/assets/dm_info4.png",
    title: "Look great & sell more",
    paragraph: "Consectetur elit sed do tempor adipiscing usmo incididunt",
  },
];
const BusinessSection = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col_md_7 text_center">
            <div className={styles.hightext}>
              <h2>We provide the best services to grow your business</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col_md_12 ">
            <div className={styles.cards_container}>
              {listData.map((item, index) => (
                <div className={styles.card} key={index}>
                  <div className={styles.card_icon}>
                    <Image src={item.image} width={100} height={100} alt="icon" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.paragraph}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
