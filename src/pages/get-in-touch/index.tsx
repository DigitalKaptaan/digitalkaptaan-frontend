import React from "react";
import { ContactForm, GetinTouch } from "@/components";
import { withMenuAndContactData } from "@/lib/server";
import Head from "next/head";

type ContactItem = {
  _id: string;
  address: string;
  addressHeader: string;
  addressIcon: string;
  countryCode: string;
  phoneNumber: string;
  phoneHeader: string;
  phoneIcon: string;
  email: string;
  emailHeader: string;
  emailIcon: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Props = {
  metaData: {
    _id: string;
    page: string;
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  contactData: ContactItem;
};

const Index = ({ metaData, contactData }: Props) => {
  return (
    <div>
      <Head>
        <title>{metaData?.title}</title>
        <meta name="description" content={metaData?.description} />
        <meta name="keywords" content={metaData?.keywords.join()} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={"/favicon.ico"} />
      </Head>
      <GetinTouch data={contactData} />
      <ContactForm />
    </div>
  );
};

export default Index;
export const getServerSideProps = withMenuAndContactData("get-in-touch");
