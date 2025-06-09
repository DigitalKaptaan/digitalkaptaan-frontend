import React from "react";
import CountUp from "react-countup";
import about from "@/styles/about.module.css";

const statsData = [
  { number: 65, suffix: "K", label: "Active Subscribers", color: "blue" },
  { number: 99, suffix: "%", label: "Customer Satisfaction", color: "yellow" },
  { number: 500, suffix: "+", label: "Completed Projects", color: "green" },
  { number: 150, suffix: "+", label: "Countries Available", color: "red" },
];

const AboutScroller = () => {
  return (
    <section className={about.statsSection}>
      {statsData.map((item, index) => (
        <div key={index} className={about.stat}>
          <h2 className={`${about.number} ${about[item.color]}`}>
            <CountUp
              end={item.number}
              duration={2}
              suffix={item.suffix}
              enableScrollSpy
              scrollSpyOnce
            />
          </h2>
          <p className={about.label}>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default AboutScroller;
