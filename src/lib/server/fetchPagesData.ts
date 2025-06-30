import { PageApi } from "../api";

export const fetchPagesData = async (slug: string) => {
  try {
    const response = await PageApi.getPageData(slug);

    if (response.code !== 200 || !response.data?.data) {
      return {
        pageData: [],
        pageHasError: true,
      };
    }

    return {
      pageData: response.data.data,
      pageHasError: false,
    };
  } catch (error) {
    console.error("Error fetching home data:", error);
    return {
      pageData: [],
      pageHasError: true,
    };
  }
};
