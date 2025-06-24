import { errorHandler, responseHandler } from "@/utils";
import ApiClient from "../axiosInstance";
import { URLS } from "../urls";

const BlogApi = {
  getBlogList: async () => {
    try {
      const response = await ApiClient.get(URLS.BLOG.BLOGLIST);
      return responseHandler(response);
    } catch (error) {
      console.log("Blog Data error", error);
      return errorHandler(error);
    }
  },
  fetchBlogBySlug: async (slug: string) => {
    try {
      const response = await ApiClient.get(`${URLS.BLOG.BLOGLIST}/${slug}`);
      return responseHandler(response);
    } catch (error) {
      console.log("Blog Data By slug error", error);
      return errorHandler(error);
    }
  },
};

export default BlogApi;
