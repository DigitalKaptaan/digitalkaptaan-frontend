import BannerSection from "@/components/BolgIdSection/BannerSection";
import BlogDetails from "@/components/BolgIdSection/BlogDetails";
import BlogForm from "@/components/BolgIdSection/BlogForm";
import { BlogApi } from "@/lib";
import { GetServerSideProps } from "next";

type Blog = {
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
  blog: Blog | null;
  error?: boolean;
  hasError?: boolean;
  notFound?: boolean;
};

const BlogPage = ({ blog, error, hasError, notFound }: Props) => {
  if (hasError) {
    return (
      <div style={{ padding: "3rem", textAlign: "center" }}>
        <h1>⚠️ Oops! Something went wrong.</h1>
        <p>Please try again later or check your internet connection.</p>
      </div>
    );
  }
  if (notFound) {
    return (
      <div style={{ padding: "3rem", textAlign: "center" }}>
        <h1>⚠️ Oops! Not Found.</h1>
        <p>Please try again later or check your internet connection.</p>
      </div>
    );
  }

  if (error) {
    return <div>Error loading blog. Please try again later.</div>;
  }

  if (!blog) {
    return <div>Loading blog...</div>;
  }

  return (
    <div>
      <BannerSection title={blog.title} date={blog.updatedAt} />
      <BlogDetails image={blog.image} description={blog.description} />
      <BlogForm />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const slug = context.params?.slug?.toString() || "";

  try {
    const response = await BlogApi.fetchBlogBySlug(slug);

    if (response.code === 404) {
      return {
        props: {
          blog: null,
          hasError: false,
          notFound: true,
        },
      };
    }
    if (response.code !== 200) {
      return {
        props: {
          blog: null,
          hasError: true,
        },
      };
    }

    const blogData = response?.data?.data;
    if (!blogData) {
      return { notFound: true, hasError: false };
    }

    return {
      props: {
        blog: blogData,
        hasError: false,
      },
    };
  } catch (err) {
    console.error("Fetch blog error:", err);
    return {
      props: {
        blog: null,
        error: true,
        hasError: true,
      },
    };
  }
};

export default BlogPage;
