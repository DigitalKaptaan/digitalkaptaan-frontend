import React from 'react'
import styles from "@/styles/TrustedCompanies.module.css";
import Image from 'next/image';

const listData = [
  {
    image: "/Trusted_img/Whitefalcon-Logo-300x168.webp"
  },
  {
    image: "/Trusted_img/4A-Logo-White-BG-01-150x150.webp"
  },
  {
    image: "/Trusted_img/Eazynappy-logo-original-150x150.webp"
  },
  {
    image: "/Trusted_img/wordscloud-logo-150x150.webp"
  },
  {
    image: "/Trusted_img/pawslogo2-300x282.webp"
  },
  {
    image: "/Trusted_img/kainiche-logo-150x150.webp"
  },
  {
        image: "/Trusted_img/Whitefalcon-Logo-300x168.webp"
  },
  {
        image: "/Trusted_img/4A-Logo-White-BG-01-150x150.webp"
  }
];

const TrustedCompanies = () => {
  return (
    <div className={styles.trusted_section}>
      <div className={styles.container}>
        <h2 className={styles.trusted_heading}>
          Trusted by <span className={styles.highlight}>50+</span> amazing companies worldwide
        </h2>
        <div className={styles.scroll_wrapper}>
          <div className={styles.trusted_logos}>
            {listData.map((item, index) => (
              <div className={styles.logo_item} key={index}>
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt={`Company ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedCompanies;
