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
      question:
        "Why should I choose The Digital Kaptaan over other digital marketing agencies?",
      answer: `<p>
  At <strong>Digital Kaptaan</strong>, we focus on strategies that are tailored to your business — not one-size-fits-all solutions.
  We combine creative thinking with data-driven insights to help you build a stronger digital presence without making empty promises.
</p>

<p>What sets us apart is our emphasis on:</p>

<ul>
  <li><strong>Clear communication</strong> — You’ll always know what we’re doing and why.</li>
  <li><strong>Result-focused execution</strong> — Our work is driven by your business goals, not just trends.</li>
  <li><strong>End-to-end services</strong> — From SEO and social media to web and app development, everything is handled under one roof.</li>
</ul>

<p>
  We work as an extension of your team — offering professional guidance, consistent effort, and honest reporting that help your brand grow steadily in the digital space.
</p>
`,
    },
    {
      question: "What industries does Digital Kaptaan serve?",
      answer: `<h4>Digital Kaptaan: Focused on the Industries That Shape Today’s Market</h4>

<p>
  At <strong>Digital Kaptaan</strong>, we specialize in crafting tailored digital strategies for growth-focused industries. Our expertise spans across:
</p>

<ul>
  <li>E-commerce & Retail</li>
  <li>Professional Services (Legal, Consulting, etc.)</li>
  <li>Fashion & Lifestyle</li>
  <li>Education & E-learning</li>
  <li>Hospitality</li>
  <li>Real Estate</li>
  <li>Healthcare</li>
  <li>Technology</li>
</ul>

<p>
  We combine industry-specific insights with competitive strategy, helping brands establish a strong digital presence, engage the right audience, and drive measurable results.
  Every solution we deliver is shaped by the unique needs of your sector, with clarity, creativity, and a focus on real business impact.
</p>
`,
    },
    {
      question: "What social media platforms does Digital Kaptaan manage?",
      answer: `<h4>Digital Kaptaan: Managing the Platforms That Matter</h4>

<p>
  At <strong>Digital Kaptaan</strong>, we handle a broad range of social media platforms including 
  <strong>Facebook</strong>, <strong>Instagram</strong>, <strong>LinkedIn</strong>, <strong>X (Twitter)</strong>, 
  <strong>Pinterest</strong>, and <strong>YouTube</strong>.
</p>

<p>
  Our focus goes beyond posting — we craft custom strategies, content, and campaign management designed to increase visibility, boost engagement, 
  and create real connections with your target audience. Whether building brand awareness or driving conversions, we ensure each platform works 
  toward your business goals.
</p>
`,
    },
    {
      question:
        "What Are the Costs of Digital Marketing Services at Digital Kaptaan?",
      answer: `<p>
  At <strong>Digital Kaptaan</strong>, our digital marketing services are customized to fit your business needs, objectives, and industry. 
  Costs may vary based on the scope and type of services required — such as <strong>SEO</strong>, <strong>social media management</strong>, 
  <strong>paid advertising</strong>, <strong>website development</strong>, or <strong>app development</strong>.
</p>

<p>We offer flexible pricing structures designed to provide:</p>
<ul>
  <li>Measurable outcomes aligned with your goals</li>
  <li>Transparent value for your investment</li>
  <li>Solutions suitable for both emerging businesses and established brands</li>
</ul>

<p>
  Rather than offering generic packages, we focus on creating tailored strategies that balance performance with cost-effectiveness.
</p>
`,
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
              {/* <div className={faqStyle.faq_answer}>{faq.answer}</div> */}
              <div
                className={faqStyle.faq_answer}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
