import "@/styles/globals.css";
import "@/styles/custom.css";

import type { AppProps } from "next/app";
import { Footer, NavBar } from "@/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
