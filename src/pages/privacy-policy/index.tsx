import { withMenuAndPageData } from "@/lib";
import Head from "next/head";
import React from "react";

import styles from "@/styles/PrivacyPolicy.module.css";
import {
  PrivacyPolicyData,
  PrivacyPolicySection,
  PrivacyPolicy1,
  PrivacyPolicy0,
  SectionWithList,
  SectionPlainText,
  ContactSection,
} from "@/types/privacyPolicy";

type Props = {
  metaData: {
    _id: string;
    page: string;
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  pageData: PrivacyPolicyData;
};

const renderSection = (section: PrivacyPolicySection) => {
  switch (section.type) {
    case "privacy-policy-0": {
      const content = (section as PrivacyPolicy0).content;
      return (
        <div className={styles.section}>
          <h2>Effective Date</h2>
          <p>
            <strong>Company:</strong> {content.company}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a href={content.website} target="_blank" rel="noopener noreferrer">
              {content.website}
            </a>
          </p>
          <p>
            <strong>Contact Email:</strong> {content.contactEmail}
          </p>
          <p>
            <strong>Effective Date:</strong> {content.effectiveDate}
          </p>
        </div>
      );
    }

    case "privacy-policy-1": {
      const content = (section as PrivacyPolicy1).content;
      return (
        <div className={styles.section}>
          <h2>{content.title}</h2>
          <p>{content.description}</p>

          <h3>{content.personalInformation.title}</h3>
          <p>{content.personalInformation.description}</p>
          <ul>
            {content.personalInformation.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h3>{content.nonPersonalInformation.title}</h3>
          <p>{content.nonPersonalInformation.description}</p>
          <ul>
            {content.nonPersonalInformation.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }

    case "privacy-policy-2":
    case "privacy-policy-3":
    case "privacy-policy-7": {
      const content = (section as SectionWithList).content;
      return (
        <div className={styles.section}>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
          <ul className={styles.ul}>
            {/* {content.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))} */}
          </ul>
          {content.contact && <p>{content.contact}</p>}
        </div>
      );
    }

    case "privacy-policy-4":
    case "privacy-policy-5":
    case "privacy-policy-6":
    case "privacy-policy-8":
    case "privacy-policy-9": {
      const content = (section as SectionPlainText).content;
      return (
        <div className={styles.section}>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
      );
    }

    case "privacy-policy-10": {
      const content = (section as ContactSection).content;
      return (
        <div className={`${styles.section} ${styles.contact}`}>
          <h2>{content.title}</h2>
          <p>
            <strong>Company:</strong> {content.company}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${content.email}`}>{content.email}</a>
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a href={content.website} target="_blank" rel="noopener noreferrer">
              {content.website}
            </a>
          </p>
        </div>
      );
    }

    default:
      return null;
  }
};

const index = ({ metaData, pageData }: Props) => {
  return (
    <>
      <Head>
        <title>{metaData.title || "About Us"}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords.join()} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1>{pageData.name}</h1>
        {pageData.sections
          .sort((a, b) => a.order - b.order)
          .map((section) => (
            <div key={section._id}>{renderSection(section)}</div>
          ))}
      </div>
    </>
  );
};

export default index;
export const getServerSideProps = withMenuAndPageData(
  "privacy-policy",
  "privacy-policy"
);
