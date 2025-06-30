const isProduction = true;
export const BASE_URL = isProduction
  ? // ? "https://digital-backend-95u1.onrender.com/"
    "https://digitalkaptaan-backend.onrender.com/"
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
