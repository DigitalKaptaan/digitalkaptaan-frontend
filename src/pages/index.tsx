import Head from "next/head";
import {
  BusinessSection,
  HeroSection,
  HomeSign,
  NumberSection,
  ServiceSection,
} from "@/components";
import { HomeApi } from "@/lib";
import { GetServerSideProps } from "next";

// ---------------- Types ----------------

type MetaData = {
  _id: string;
  page: string;
  title: string;
  description: string;
  keywords: string;
  faviconUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type BannerData = {
  _id: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  animationIcons: string[];
  buttons: {
    label: string;
    link: string;
    _id: string;
  }[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type SolutionHighlight = {
  _id: string;
  title: string;
  image: string;
  buttons: {
    label: string;
    link: string;
    _id: string;
  }[];
  points: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// Typed union without `any`
type HomeContentItem =
  | { type: "meta"; data: MetaData }
  | { type: "banners"; data: BannerData[] }
  | { type: "solutionHighlights"; data: SolutionHighlight[] };

// Props for component
type Props = {
  homeData: HomeContentItem[];
  hasError: boolean;
};

// ---------------- Component ----------------

export default function Home({ homeData, hasError }: Props) {
  if (hasError || !homeData.length) {
    return (
      <div style={{ padding: "3rem", textAlign: "center" }}>
        <h1>⚠️ Oops! Something went wrong.</h1>
        <p>Please try again later or check your internet connection.</p>
      </div>
    );
  }

  const metaDataItem = homeData.find((item) => item.type === "meta");
  const bannerDataItem = homeData.find((item) => item.type === "banners");
  const solutionHighlightsItem = homeData.find(
    (item) => item.type === "solutionHighlights"
  );

  const metaData = metaDataItem?.data as MetaData;
  const bannerData = bannerDataItem?.data as BannerData[];
  const solutionHighlightsData =
    solutionHighlightsItem?.data as SolutionHighlight[];

  return (
    <>
      <Head>
        <title>{metaData?.title ?? "Home"}</title>
        <meta
          name="description"
          content={metaData?.description ?? "Welcome to our website"}
        />
        <meta name="keywords" content={metaData?.keywords ?? ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={metaData?.faviconUrl ?? "/favicon.ico"} />
      </Head>

      <HeroSection data={bannerData[0]} />
      <NumberSection />
      <ServiceSection data={solutionHighlightsData} type="" />
      <BusinessSection />
      <HomeSign />
    </>
  );
}

// ---------------- SSR ----------------

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const response = await HomeApi.getHomeData();

    if (response.code !== 200 || !response.data?.data) {
      return {
        props: {
          homeData: [],
          hasError: true,
        },
      };
    }

    return {
      props: {
        homeData: response.data.data as HomeContentItem[],
        hasError: false,
      },
    };
  } catch (error: unknown) {
    console.error("Error fetching home data:", error);
    return {
      props: {
        homeData: [],
        hasError: true,
      },
    };
  }
};
