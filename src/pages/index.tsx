import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import useHomePage from "@/hooks/useHomePage";
import { HeroSection } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const { home, isLoading, error } = useHomePage();

  if (isLoading) return <div>Loading home</div>;
  if (error) return <div>Error loading menu</div>;

  const metaData = home.data.find((item: any) => item.type === "meta");

  return (
    <>
      <Head>
        <title>{metaData.data.title}</title>
        <meta name="description" content={metaData.data.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
    </>
  );
}
