import { BlogApi } from "@/lib";

export const fetchBlogsData = async () => {
  try {
    const response = await BlogApi.getBlogList();

    if (response.code !== 200 || !response.data?.data) {
      return {
        blogsData: [],
        blogsHasError: true,
      };
    }

    return {
      blogsData: response.data.data,
      blogsHasError: false,
    };
  } catch (error) {
    console.error("Error fetching blogs data:", error);
    return {
      blogsData: [],
      blogsHasError: true,
    };
  }
};

export const fetchBlogDetailData = async (slug: string) => {
  try {
    const response = await BlogApi.fetchBlogBySlug(slug);

    if (response.code !== 200 || !response.data?.data) {
      return {
        blogDetailData: null,
        blogDetailHasError: true,
      };
    }

    return {
      blogDetailData: response.data.data,
      blogDetailHasError: false,
    };
  } catch (error) {
    console.error("Error fetching blogs data:", error);
    return {
      blogDetailData: null,
      blogDetailHasError: true,
    };
  }
};
