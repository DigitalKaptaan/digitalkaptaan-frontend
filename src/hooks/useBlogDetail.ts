import { fetchBlogByID } from "@/services";
import useSWR from "swr";

type Props = {
  slug: string;
};

const useBlogDetail = (props: Props) => {
  const { slug } = props;
  const { data, error, isLoading } = useSWR("blogByID", () =>
    fetchBlogByID(slug)
  );

  return {
    blogByID: data,
    isLoading,
    error,
  };
};

export default useBlogDetail;
