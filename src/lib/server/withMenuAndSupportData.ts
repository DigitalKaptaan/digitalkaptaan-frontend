import { GetServerSideProps } from "next";
import { fetchFooterMenuData, fetchMenuData } from "./fetchMenuData";
import { fetchContactData } from "./fetchContactData";
import { fetchMetaData } from "./fetchMetaData";
import { fetchPagesData } from "..";

export const withMenuAndSupportData = (
  metaSlug: string,
  pageSlug: string
): GetServerSideProps => {
  return async () => {
    const [meta, nav, footer, contact] = await Promise.all([
      fetchMetaData(metaSlug),
      fetchMenuData("main-nav"),
      fetchFooterMenuData("footer-nav"),
      fetchContactData(),
    ]);

    return {
      props: {
        ...meta,
        ...nav,
        ...footer,
        ...contact,
      },
    };
  };
};
