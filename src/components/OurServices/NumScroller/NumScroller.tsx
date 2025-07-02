import React from 'react';
import Style from "@/styles/OurServices.module.css";
import CountUp from 'react-countup';

const statsData = [
  { end: 650, suffix: 'K', label: 'Nam libero tempore, cum soluta nobis eligendi optio cumque nihil .' },
  { end: 99, suffix: '%', label: 'Nam libero tempore, cum soluta nobis eligendi optio cumque nihil .' },
  { end: 140, suffix: '+', label: 'Nam libero tempore, cum soluta nobis eligendi optio cumque nihil .' },
];

const NumScroller = () => {
  return (
    <div className={Style.stats_wrapper}>
      <div className={Style.stats_container}>
        {statsData.map((item, index) => (
          <div className={Style.stat_item} key={index}>
            <h3 className={Style.stat_number}>
              <CountUp
                end={item.end}
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
  )
}

export default NumScroller
