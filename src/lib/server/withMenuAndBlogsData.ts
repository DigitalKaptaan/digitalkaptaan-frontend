import { GetServerSideProps } from "next";
import { fetchFooterMenuData, fetchMenuData } from "./fetchMenuData";
import { fetchBlogDetailData, fetchBlogsData } from "./fetchBlogsData";
import { fetchContactData } from "./fetchContactData";
import { fetchMetaData } from "./fetchMetaData";

export const withMenuAndBlogsData = (): GetServerSideProps => {
  return async () => {
    const [meta, nav, blogs, footer, contact] = await Promise.all([
      fetchMetaData("blog"),
      fetchMenuData("main-nav"),
      fetchBlogsData(),
      fetchFooterMenuData("footer-nav"),
      fetchContactData(),
    ]);

    return {
      props: {
        ...meta,
        ...nav,
        ...blogs,
        ...footer,
        ...contact,
      },
    };
  };
};
export const withMenuAndBlogDetailData = (): GetServerSideProps => {
  return async ({ query }) => {
    const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug ?? "";

    const [nav, blogDeatil, footer, contact] = await Promise.all([
      fetchMenuData("main-nav"),
      fetchBlogDetailData(slug),
      fetchFooterMenuData("footer-nav"),
      fetchContactData(),
    ]);

    return {
      props: {
        ...nav,
        ...blogDeatil,
        ...footer,
        ...contact,
      },
    };
  };
};
