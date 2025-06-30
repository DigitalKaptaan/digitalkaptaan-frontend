import { NavApi } from "@/lib";

export const fetchMenuData = async (sulg: string) => {
  try {
    const response = await NavApi.getNavMenu(sulg);

    if (response.code !== 200 || !response.data?.data) {
      return {
        navData: [],
        navHasError: true,
      };
    }

    return {
      navData: response.data.data,
      navHasError: false,
    };
  } catch (error) {
    console.error("Error fetching nav data:", error);
    return {
      navData: [],
      navHasError: true,
    };
  }
};
export const fetchFooterMenuData = async (sulg: string) => {
  try {
    const response = await NavApi.getNavMenu(sulg);

    if (response.code !== 200 || !response.data?.data) {
      return {
        footerData: [],
        footerHasError: true,
      };
    }

    return {
      footerData: response.data.data,
      footerHasError: false,
    };
  } catch (error) {
    console.error("Error fetching nav data:", error);
    return {
      footerData: [],
      footerHasError: true,
    };
  }
};
