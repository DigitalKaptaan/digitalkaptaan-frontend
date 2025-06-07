import React from "react";
import CountUp from "react-countup";
import styles from "@/styles/number.module.css";

const statsData = [
  { number: 210, suffix: "+", label: "Worldwide Clients", color: "blue" },
  { number: 90, suffix: "%", label: "Positive Feedback", color: "yellow" },
  { number: 150, suffix: "+", label: "Successful Projects", color: "green" },
  { number: 30, suffix: "+", label: "Marketing Experts", color: "red" },
];

const NumberSection = () => {
  return (
    <section className={styles.statsSection}>
      {statsData.map((item, index) => (
        <div key={index} className={styles.stat}>
          <h2 className={`${styles.number} ${styles[item.color]}`}>
            <CountUp
              end={item.number}
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
