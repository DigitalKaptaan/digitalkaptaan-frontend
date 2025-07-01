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

type HeroSection = {
  type: "hero";
  content: {
    headline: string;
    description: string;
    imageUrl: string;
    cta?: string;
    animationIcons: string[];
  };
};

type StatsSection = {
  type: "stats";
  content: {
    items: {
      label: string;
      value: number;
      color: string;
      suffix: string;
    }[];
  };
};

type FeaturesSection = {
  type: "features";
  content: {
    items: {
      title: string;
      description: string[];
      imageUrl: string;
      buttons?: {
        label: string;
        url: string;
      }[];
    }[];
  };
};

type ServiceCardsSection = {
  type: "serviceCards";
  content: {
    title: string;
    cards: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
};

type HomeSection =
  | HeroSection
  | StatsSection
  | FeaturesSection
  | ServiceCardsSection;

type ExtendedSection = HomeSection & {
  _id: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// === Page Data Type ===

type PageData = {
  _id: string;
  name: string;
  slug: string;
  sections: ExtendedSection[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

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
  pageData: PageData;
  pageHasError: boolean;
};

export default function Home({ metaData, pageData, pageHasError }: Props) {
  if (pageHasError || !pageData) {
    return (
      <div style={{ padding: "3rem", textAlign: "center" }}>
        <h1>⚠️ Oops! Something went wrong.</h1>
        <p>Please try again later or contact support.</p>
      </div>
    );
  }

  return (
    <div>
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
            default:
              return null;
          }
        })}

<TrustedCompanies />
<Feature />

      <HomeSign />
    </div>
  );
}

export const getServerSideProps = withMenuAndPageData("home", "home");
