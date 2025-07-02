import { withMenuAndPageData } from "@/lib";
import Head from "next/head";
import React from "react";
import {
  SectionContact,
  SectionIntro,
  SectionSimple,
  SectionWithListAndContact,
  TermsAndConditions,
  TermsSection,
} from "@/types/termsAndConditions";
import styles from "@/styles/termsAndConditions.module.css";
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
  pageData: TermsAndConditions;
};

const index = ({ metaData, pageData }: Props) => {
  const SectionRenderer = ({ section }: { section: TermsSection }) => {
    switch (section.type) {
      case "terms-and-conditions-0": {
        const content = section.content as SectionIntro;
        return (
          <div className={styles.introSection}>
            <p>
              <strong>Effective Date:</strong> {content.effectiveDate}
            </p>
            <p>
              <strong>Company:</strong> {content.company}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href={content.website}>{content.website}</a>
            </p>
            <p>
              <strong>Contact Email:</strong>{" "}
              <a href={`mailto:${content.contactEmail}`}>
                {content.contactEmail}
              </a>
            </p>
          </div>
        );
      }

      case "terms-and-conditions-1":
      case "terms-and-conditions-2":
      case "terms-and-conditions-3":
      case "terms-and-conditions-4":
      case "terms-and-conditions-5":
      case "terms-and-conditions-6": {
        const content = section.content as SectionWithListAndContact;
        return (
          <div className={styles.section}>
            <h2>{content.title}</h2>
            {content.description && <p>{content.description}</p>}
            {content.items && (
              <ul>
                {content.items.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {content.contact && (
              <p>
                <strong>{content.contact}</strong>
              </p>
            )}
          </div>
        );
      }

      case "terms-and-conditions-7":
      case "terms-and-conditions-8":
      case "terms-and-conditions-9": {
        const content = section.content as SectionSimple;
        return (
          <div className={styles.section}>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
          </div>
        );
      }

      case "terms-and-conditions-10": {
        const content = section.content as SectionContact;
        return (
          <div className={styles.section}>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            <p>
              <strong>Company:</strong> {content.company}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${content.email}`}>{content.email}</a>
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href={content.website}>{content.website}</a>
            </p>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{metaData.title || "Term and Condition"}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords.join()} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {pageData.sections
        .sort((a, b) => a.order - b.order)
        .map((section, index) => (
          <SectionRenderer key={index} section={section} />
        ))}
    </div>
  );
};

export default index;
export const getServerSideProps = withMenuAndPageData(
  "terms-and-conditions",
  "terms-and-conditions"
);
