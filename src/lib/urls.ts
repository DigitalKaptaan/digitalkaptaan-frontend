const isProduction = true;
export const BASE_URL = isProduction
  ? "https://digital-backend-95u1.onrender.com/"
  : "http://localhost:8000";
export const URLS = {
  MENU: {
    GETMENU: "/api/menus",
  },
  HOME: {
    GETHOMEDATA: "/api/homepage",
  },
};
