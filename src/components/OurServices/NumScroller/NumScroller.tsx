import React from "react";
import Style from "@/styles/OurServices.module.css";
import CountUp from "react-countup";
const NumScroller = ({
  statsData,
}: {
  statsData: {
    items: {
      label: string;
      value: number;
      color: string;
      suffix: string;
    }[];
  };
}) => {
  return (
    <div className={Style.stats_wrapper}>
      <div className={Style.stats_container}>
        {statsData.items.map((item, index) => (
          <div className={Style.stat_item} key={index}>
            <h3 className={Style.stat_number}>
              <CountUp
                end={item.value}
                duration={2.5}
                enableScrollSpy
                scrollSpyOnce
              />
              <span>{item.suffix}</span>
            </h3>
            <p className={Style.stat_text}>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumScroller;
