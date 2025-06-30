import {
  AboutDetails,
  AboutForm,
  AboutHero,
  AboutMembor,
  AboutScroller,
} from "@/components";
import { withMenuAndPageData } from "@/lib/server";
import Head from "next/head";
import React from "react";

type HeroSectionContent = {
  headline: string;
  description: string;
  images: string[];
};

type ServicesSectionContent = {
  items: {
    id: string;
    title: string;
    description: string;
  }[];
};

type StatsSectionContent = {
  items: {
    label: string;
    value: number;
    color: string;
    suffix: string;
  }[];
};

type TeamSectionContent = {
  title: string;
  description: string;
  members: {
    name: string;
    role: string;
    imageUrl: string;
  }[];
};

type SectionBase = {
  _id: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type PageSection =
  | (SectionBase & { type: "about-hero"; content: HeroSectionContent })
  | (SectionBase & { type: "about-services"; content: ServicesSectionContent })
  | (SectionBase & { type: "about-stats"; content: StatsSectionContent })
  | (SectionBase & { type: "about-team"; content: TeamSectionContent });

type PageData = {
  _id: string;
  name: string;
  slug: string;
  sections: PageSection[];
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

const Index = ({ metaData, pageData }: Props) => {
  return (
    <>
      <Head>
        <title>{metaData.title || "About Us"}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords.join()} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {[...pageData.sections]
        .sort((a, b) => a.order - b.order)
        .map((section) => {
          switch (section.type) {
            case "about-hero":
              return <AboutHero key={section._id} data={section.content} />;
            case "about-services":
              return (
                <AboutDetails key={section._id} data={section.content.items} />
              );
            case "about-stats":
              return (
                <AboutScroller key={section._id} data={section.content.items} />
              );
            case "about-team":
              return <AboutMembor key={section._id} data={section.content} />;
            default:
              return null;
          }
        })}
      <AboutForm />
    </>
  );
};

export default Index;

export const getServerSideProps = withMenuAndPageData("about-us", "about");
