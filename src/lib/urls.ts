const isProduction = false;
export const BASE_URL = isProduction
  ? "https://codewithsachin.in/"
  : "http://localhost:8000";
export const URLS = {
  META: {
    GETMETA: "/api/meta",
  },
  MENU: {
    GETMENU: "/api/menus",
  },
  PAGE: {
    GETPAGEDATA: "/api/pages",
  },
  HOME: {
    GETHOMEDATA: "/api/pages",
  },
  CONTACT: {
    GETCONTACTLIST: "/api/contact",
    POSTCUSTOMERREQUEST: "/api/contact/customer-request",
  },
  BLOG: {
    BLOGLIST: "/api/blog",
  },
};
