import React from "react";
import { CustomButton } from "@/common";
// import { useRouter } from "next/navigation";



const index = ( ) => {
  // const router = useRouter();
  return (
    <>
      <div>index</div>
      {/* <CustomButton
        variant="primary"
        title="Click Me"
        onClick={() => router.push("/")}
      /> */}
      <CustomButton
        variant="withoutBorder"
        title="Click Me"
        onClick={() => alert("Button Clicked!")}
      />
    </>
  );
};

export default index;
