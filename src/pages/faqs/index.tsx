import React, { useState } from "react";
import { withMenuAndFAQData } from "@/lib";
import Head from "next/head";
import styles from "@/styles/faqs.module.css";

type Props = {
  metaData: any;
  pageData: any;
};

const Index = ({ metaData, pageData }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>{metaData?.title}</title>
        <meta name="description" content={metaData?.description} />
        <meta name="keywords" content={metaData?.keywords.join(", ")} />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.heading}>{pageData?.name || "FAQs"}</h1>

        {pageData.sections.map((faq: any, index: number) => (
          <div key={faq._id} className={styles.faqItem}>
            <button
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.content.title}</span>
              <span className={styles.icon}>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className={styles.faqAnswer}>{faq.content.answer}</div>
            )}
          </div>
        ))}
      </main>
    </>
  );
};

export default Index;

export const getServerSideProps = withMenuAndFAQData("faqs", "faqs");
