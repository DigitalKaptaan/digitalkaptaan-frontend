import "@/styles/globals.css";
import "@/styles/custom.css";

import type { AppProps } from "next/app";
import { Footer, NavBar } from "@/layout";

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
