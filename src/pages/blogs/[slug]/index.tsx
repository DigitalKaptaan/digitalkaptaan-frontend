import { BannerSection, BlogDetails, BlogForm } from "@/components";
import { withMenuAndBlogDetailData } from "@/lib";
import Head from "next/head";

type Blog = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
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
  blogDetailData: Blog | null;
  blogDetailHasError: boolean;
};

const BlogPage = ({ blogDetailData }: Props) => {
  if (!blogDetailData) {
    return (
      <div
        style={{
          padding: "3rem",
          textAlign: "center",
        }}
      >
        <h1>⚠️ Oops! Something went wrong.</h1>
        <p>Please try again later or check your internet connection.</p>
      </div>
    );
  }
  return (
    <main>
      <Head>
        <title>{blogDetailData?.meta?.title ?? "Blog Detils"}</title>
        <meta
          name="description"
          content={blogDetailData?.meta?.description ?? ""}
        />
        <meta
          name="keywords"
          content={
            blogDetailData?.meta?.keywords.join() ?? "blog, articles, tech"
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <BannerSection
        title={blogDetailData.title}
        date={blogDetailData.updatedAt}
      />
      <BlogDetails
        image={blogDetailData.coverImage}
        description={blogDetailData.content}
      />
      <BlogForm />
    </main>
  );
};

export const getServerSideProps = withMenuAndBlogDetailData();

export default BlogPage;
