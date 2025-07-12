import Head from "next/head";
import {
  BusinessSection,
  Feature,
  HeroSection,
  HomeSign,
  NumberSection,
  ServiceSection,
  TrustedCompanies,
  FaqSection,
} from "@/components";
import { withMenuAndPageData } from "@/lib/server";
import { HomeProps } from "@/types";
import { CustomBlogCard } from "@/common";
import styles from "@/styles/Home.module.css";

export default function Home({ metaData, pageData, pageHasError }: HomeProps) {
  if (pageHasError || !pageData) {
    return (
      <main style={{ padding: "3rem", textAlign: "center" }}>
        <h1>⚠️ Oops! Something went wrong.</h1>
        <p>Please try again later or contact support.</p>
      </main>
    );
  }

  return (
    <main>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords.join()} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {[...pageData.sections]
        .sort((a, b) => a.order - b.order)
        .map((section) => {
          switch (section.type) {
            case "hero":
              return <HeroSection key={section._id} data={section.content} />;
            case "stats":
              return (
                <NumberSection
                  key={section._id}
                  statsData={section.content.items}
                />
              );
            case "features":
              return (
                <ServiceSection
                  key={section._id}
                  data={section.content.items}
                />
              );
            case "serviceCards":
              return (
                <BusinessSection key={section._id} data={section.content} />
              );
            case "trusted-partners":
              return (
                <TrustedCompanies key={section._id} data={section.content} />
              );
            case "basic-features":
              return <Feature key={section._id} data={section.content} />;
            default:
              return null;
          }
        })}
      <FaqSection />

      <section className={styles.feature_section}>
        <div className={styles.feature_container}>
          <div className={styles.feature_heading}>
            <h2>Read our marketing articles to know more</h2>
          </div>

          <div className={styles.feature_grid}>
            <CustomBlogCard blogList={pageData?.latestBlogs} />
          </div>
        </div>
      </section>

      <HomeSign />
    </main>
  );
}

export const getServerSideProps = withMenuAndPageData("home", "home");
