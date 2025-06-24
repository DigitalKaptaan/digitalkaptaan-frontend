import { BlogApi } from "@/lib";

export const fetchBlogList = async () => {
  const response = await BlogApi.getBlogList();
  return response.data;
};
export const fetchBlogByID = async (slug: string) => {
  const response = await BlogApi.fetchBlogBySlug(slug);
  return response.data;
};
