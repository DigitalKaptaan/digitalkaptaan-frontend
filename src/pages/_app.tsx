import "@/styles/globals.css";
import "nprogress/nprogress.css";
import type { AppProps } from "next/app";
import { Footer, NavBar } from "@/layout";
import Router from "next/router";
import NProgress from "nprogress";

export default function App({ Component, pageProps }: AppProps) {
  const {
    navData = [],
    footerData = [],
    contactData,
    contactHasError = true,
    footerHasError = true,
  } = pageProps;

  if (contactHasError) {
    return;
  }

  NProgress.configure({ showSpinner: false, speed: 400 });

  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());
  return (
    <div>
      <NavBar menu={navData.items} />
      <Component {...pageProps} />
      {footerHasError && contactHasError ? null : (
        <Footer footer={footerData.items} contact={contactData} />
      )}
    </div>
  );
}
