import React from "react";
import styles from "@/styles/TrustedCompanies.module.css";
import Image from "next/image";

type Props = {
  data: {
    headline1: string;
    headline2: string;
    headline3: string;
    items: string[];
  };
};

const TrustedCompanies = ({ data }: Props) => {
  return (
    <div className={styles.trusted_section}>
      <div className={styles.container}>
        <h2 className={styles.trusted_heading}>
          {data.headline1}{" "}
          <span className={styles.highlight}>{data.headline2}</span>{" "}
          {data.headline3}
        </h2>
        <div className={styles.scroll_wrapper}>
          <div className={styles.trusted_logos}>
            {data.items.map((item, index) => (
              <div className={styles.logo_item} key={index}>
                <Image
                  src={item}
                  width={100}
                  height={100}
                  alt={`Company ${index + 1}`}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
