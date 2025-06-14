import Head from "next/head";
import useHomePage from "@/hooks/useHomePage";
import { HeroSection } from "@/components";
import ServiceSection from "@/components/home/ServiceSection";
import NumberSection from "@/components/home/NumberSection";
import BusinessSection from "@/components/home/BusinessSection";
import { Footer } from "@/layout";
import HomeSign from "@/components/home/HomeSign";

export default function Home() {
  const { home, isLoading, error } = useHomePage();

  if (isLoading) return <div>Loading home</div>;
  if (error) return <div>Error loading menu</div>;

  const metaData = home.data.find(
    (item: {
      type: string;
      data: {
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
    }) => item.type === "meta"
  );
  const bannerData = home.data.find(
    (item: {
      type: string;
      data: {
        _id: string;
        title: string;
        subtitle: string;
        backgroundImage: string;
        animationIcons: string[];
        buttons: [];
        createdAt: string;
        updatedAt: string;
        __v: number;
      };
    }) => item.type === "banners"
  );
  const solutionHighlightsData = home.data.find(
    (item: {
      type: string;
      data: {
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
      }[];
    }) => item.type === "solutionHighlights"
  );

  return (
    <>
      <Head>
        <title>{metaData.data.title}</title>
        <meta name="description" content={metaData.data.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection {...bannerData} />
      <NumberSection />
      <ServiceSection {...solutionHighlightsData} />
      <BusinessSection />
      <HomeSign />
      <Footer />
    </>
  );
}
