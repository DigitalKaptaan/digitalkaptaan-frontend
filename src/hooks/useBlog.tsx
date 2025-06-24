import { fetchBlogList } from "@/services";
import useSWR from "swr";

const useBlog = () => {
  const { data, error, isLoading } = useSWR("blog", fetchBlogList);

  return {
    blog: data,
    isLoading,
    error,
  };
};

export default useBlog;
