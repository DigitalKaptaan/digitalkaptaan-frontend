import { MetaApi } from "@/lib";

export const fetchMetaData = async (slug: string) => {
  try {
    const response = await MetaApi.getMetaData(slug);

    if (response.code !== 200 || !response.data?.data) {
      return {
        metaData: null,
        metaHasError: true,
      };
    }

    return {
      metaData: response.data.data,
      metaHasError: false,
    };
  } catch (error) {
    console.error("Error fetching meta data:", error);
    return {
      metaData: null,
      metaHasError: true,
    };
  }
};
