import React from "react";
import { withMenuAndPageData } from "@/lib";
import { Feature, NumScroller, ServiceHero } from "@/components";
import Head from "next/head";
import { ServicePage } from "@/types";

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
  pageData: ServicePage;
};
const index = ({ metaData, pageData }: Props) => {
  return (
    <main>
      <Head>
        <title>{metaData?.title}</title>
        <meta name="description" content={metaData?.description} />
        <meta name="keywords" content={metaData?.keywords.join()} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={"/favicon.ico"} />
      </Head>

      {[...pageData.sections]
        .sort((a, b) => a.order - b.order)
        .map((section) => {
          switch (section.type) {
            case "service-hero":
              return <ServiceHero key={section._id} data={section.content} />;
            case "service-stats":
              return (
                <NumScroller key={section._id} statsData={section.content} />
              );
            case "service-basic-features":
              return <Feature key={section._id} data={section.content} />;
            default:
              return null;
          }
        })}
    </main>
  );
};

export default index;

export const getServerSideProps = withMenuAndPageData(
  "our-services",
  "our-services"
);
