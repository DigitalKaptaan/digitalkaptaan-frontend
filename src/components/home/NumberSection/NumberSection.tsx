import React from "react";
import CountUp from "react-countup";
import styles from "@/styles/number.module.css";

type Props = {
  statsData: {
    label: string;
    value: number;
    color: string;
    suffix: string;
  }[];
};
const NumberSection = ({ statsData }: Props) => {
  return (
    <section className={styles.statsSection}>
      {statsData.map((item, index) => (
        <div key={index} className={styles.stat}>
          <h2 className={`${styles.number} ${styles[item.color]}`}>
            <CountUp
              end={item.value}
              duration={2}
              suffix={item.suffix}
              enableScrollSpy
              scrollSpyOnce
            />
          </h2>
          <p className={styles.label}>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default NumberSection;
