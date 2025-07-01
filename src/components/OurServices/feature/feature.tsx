import React from "react";
import Style from "@/styles/OurServices.module.css";

const features = [
  {
    icon: 'ri-command-line',
    title: 'UI/UX Design',
    text: 'Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum rhoncus aliquet.',
    href: '#',
  },
  {
    icon: 'ri-megaphone-line',
    title: 'Digital Marketing',
    text: 'Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum rhoncus aliquet.',
    href: '#',
  },
  {
    icon: 'ri-sliders-line',
    title: 'App Development',
    text: 'Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum rhoncus aliquet.',
    href: '#',
  },
  {
    icon: 'ri-code-s-slash-line',
    title: 'Web Development',
    text: 'Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum rhoncus aliquet.',
    href: '#',
  },
  {
    icon: 'ri-search-line',
    title: 'Search Optimization',
    text: 'Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum rhoncus aliquet.',
    href: '#',
  },
  {
    icon: 'ri-user-line',
    title: 'Web Consultation',
    text: 'Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum rhoncus aliquet.',
    href: '#',
  }
];



const feature = () => {
  return (
    <div>
      <section className={Style.feature_section}>
        <div className={Style.feature_container}>
          <div className={Style.feature_heading}>
            <h2>Our basic features</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              <br />
              but the majority have suffered alteration in some form,
            </p>
          </div>

          <div className={Style.feature_grid}>
            {features.map((item, index) => (
              <a href={item.href} className={Style.feature_card} key={index}>
                <i className={`${item.icon} ${Style.feature_icon}`}></i>
                <h3 className={Style.feature_title}>{item.title}</h3>
                <p className={Style.feature_text}>{item.text}</p>
                <span className={Style.feature_link}>
                  Get Started <i className="ri-arrow-right-line"></i>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default feature;
