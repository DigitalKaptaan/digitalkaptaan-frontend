import { GetServerSideProps } from "next";
import { fetchFooterMenuData, fetchMenuData } from "./fetchMenuData";
import { fetchContactData } from "./fetchContactData";
import { fetchMetaData } from "./fetchMetaData";

export const withMenuAndContactData = (): GetServerSideProps => {
  return async () => {
    const [meta, nav, contact, footer] = await Promise.all([
      fetchMetaData("contact"),
      fetchMenuData("main-nav"),
      fetchContactData(),
      fetchFooterMenuData("footer-nav"),
    ]);

    return {
      props: {
        ...meta,
        ...nav,
        ...contact,
        ...footer,
      },
    };
  };
};
