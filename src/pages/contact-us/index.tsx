// import React from "react";
// import { ContactForm, GetinTouch } from "@/components";
// import { useContact } from "@/hooks";

// const Index = () => {
//   const {
//     contactList,
//     fetchError,
//     isLoading,
//     formError,
//     formLoading,
//     formSuccess,
//     handleChange,
//     handleSubmit,
//     values,
//   } = useContact();
//   if (isLoading) return <div>Loading home</div>;
//   if (fetchError) return <div>Error loading menu</div>;

//   return (
//     <div>
//       <GetinTouch list={contactList.data || []} />
//       <ContactForm
//         values={values}
//         formError={formError}
//         formSuccess={formSuccess}
//         formLoading={formLoading}
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}
//       />
//     </div>
//   );
// };

// export default Index;

import React from "react";
import { ContactForm, GetinTouch } from "@/components";
import { ContactApi } from "@/lib"; // Make sure this API client exists and works
import { GetServerSideProps } from "next";

type ContactItem = {
  _id: string;
  title: string;
  data: string;
  iconPath: string;
  iconContent: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Props = {
  contactList: ContactItem[];
};

const Index = ({ contactList }: Props) => {
  return (
    <div>
      <GetinTouch list={contactList ?? []} />
      <ContactForm />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const response = await ContactApi.getContactListData();
    const data = response?.data?.data ?? [];

    return {
      props: {
        contactList: data,
      },
    };
  } catch (error) {
    console.error("Error fetching contact list:", error);
    return {
      props: {
        contactList: [],
      },
    };
  }
};

export default Index;
