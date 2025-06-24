import React from "react";
import Head from "next/head";
import BlogSection from "@/components/BlogSection";
import { BlogApi } from "@/lib";

import { GetServerSideProps } from "next";

type BlogData = {
  _id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  isPublished: boolean;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Props = {
  blogList: BlogData[];
  hasError: boolean;
};

const BlogIndexPage = ({ blogList, hasError }: Props) => {
  if (hasError || !blogList.length) {
    return (
      <div style={{ padding: "3rem", textAlign: "center" }}>
        <h1>⚠️ Oops! Something went wrong.</h1>
        <p>Please try again later or check your internet connection.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Our Blog - Latest Posts & Articles</title>
        <meta
          name="description"
          content="Read our latest articles on tech, travel, lifestyle, and more."
        />
        <meta
          property="og:title"
          content="Our Blog - Latest Posts & Articles"
        />
        <meta
          property="og:description"
          content="Explore the most recent updates and curated blog content."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/blogs" />
        <meta
          property="og:image"
          content="https://yourdomain.com/seo-cover.jpg"
        />
        <link rel="canonical" href="https://yourdomain.com/blogs" />
      </Head>

      <BlogSection blogList={blogList} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const blog = await BlogApi.getBlogList();

    if (blog.code !== 200) {
      return {
        props: {
          blogList: [],
          hasError: true,
        },
      };
    }
    if (!blog?.data?.data?.length) {
      return { props: { blogList: [], hasError: true } };
    }

    return {
      props: {
        blogList: blog.data.data,
        hasError: false,
      },
    };
  } catch (error: unknown) {
    return {
      props: {
        blogList: [],
        hasError: true,
        error: error,
      },
    };
  }
};

export default BlogIndexPage;
