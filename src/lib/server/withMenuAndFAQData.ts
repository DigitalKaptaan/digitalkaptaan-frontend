import { GetServerSideProps } from "next";
import { fetchFooterMenuData, fetchMenuData } from "./fetchMenuData";
import { fetchContactData } from "./fetchContactData";
import { fetchMetaData } from "./fetchMetaData";
import { fetchPagesData } from "..";

export const withMenuAndFAQData = (
  metaSlug: string,
  pageSlug: string
): GetServerSideProps => {
  return async () => {
    const [meta, nav, page, footer, contact] = await Promise.all([
      fetchMetaData(metaSlug),
      fetchMenuData("main-nav"),
      fetchPagesData(pageSlug),
      fetchFooterMenuData("footer-nav"),
      fetchContactData(),
    ]);

    return {
      props: {
        ...meta,
        ...nav,
        ...page,
        ...footer,
        ...contact,
      },
    };
  };
};
