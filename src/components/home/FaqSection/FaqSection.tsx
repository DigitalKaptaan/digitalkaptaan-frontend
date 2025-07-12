import React, { useState } from "react";
import Image from "next/image";
import faqStyle from "@/styles/Faq.module.css";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const faqs = [
    {
      question: "What is the benefits of digital marketing?",
      answer:        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua quis nostrud exerc dolores eos qui ratione.",
    },
    {
      question: "What is social media promotion?",
      answer: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua quis nostrud exerc dolores eos qui ratione",
    },
    {
      question: "How to join your referral program?",
      answer: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua quis nostrud exerc dolores eos qui ratione",
    },
  ];

  return (
    <div className={faqStyle.faq_section}>
      <div className={faqStyle.faq_container}>
        <div className={faqStyle.faq_image}>
          <Image
              src="/assets/dm_faq.png"
            width={450}
            height={500}
            alt="dm_faq"
            className={faqStyle.faq_image_img}
          />
        </div>

        <div className={faqStyle.faq_content}>
          <h2 className={faqStyle.faq_heading}>
            Our most frequently <br />
            <span>asked questions</span>
          </h2>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${faqStyle.faq_item} ${
                activeIndex === index ? faqStyle.active : ""
              }`}
            >
              <div
                className={faqStyle.faq_question}
                onClick={() => toggleFAQ(index)}
              >
                <span className={faqStyle.faq_number}>{index + 1}.</span>{" "}
                {faq.question}
                <Image
                  src={
                    activeIndex === index
                      ? "/assets/icon_top.png"
                      : "/assets/icon_bottom.png"
                  }
                  width={18}
                  height={18}
                  alt="toggle icon"
                  className={faqStyle.faq_icon}
                />
              </div>
              <div className={faqStyle.faq_answer}>{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
