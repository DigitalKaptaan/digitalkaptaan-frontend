import React from "react";
import { BlogSection } from "@/components";
import { withMenuAndBlogsData } from "@/lib";
import Head from "next/head";

type BlogData = {
  meta?: {
    keywords?: string[];
    description?: string;
    title?: string;
  };
  _id: string;
  title: string;
  content: string;
  coverImage: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
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
  blogsData: BlogData[];
  blogsHasError: boolean;
};

const Index = ({ metaData, blogsData }: Props) => {
  return (
    <>
      <Head>
        <title>{metaData?.title}</title>
        <meta name="description" content={metaData?.description} />
        <meta name="keywords" content={metaData?.keywords.join()} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={"/favicon.ico"} />
      </Head>

      <BlogSection blogList={blogsData} />
    </>
  );
};

export default Index;

export const getServerSideProps = withMenuAndBlogsData();
