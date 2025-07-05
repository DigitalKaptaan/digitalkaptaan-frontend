import Head from "next/head";
import {
  BusinessSection,
  Feature,
  HeroSection,
  HomeSign,
  NumberSection,
  ServiceSection,
  TrustedCompanies,
} from "@/components";
import { withMenuAndPageData } from "@/lib/server";
import { HomeProps } from "@/types";

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

      <HomeSign />
    </main>
  );
}

export const getServerSideProps = withMenuAndPageData("home", "home");
