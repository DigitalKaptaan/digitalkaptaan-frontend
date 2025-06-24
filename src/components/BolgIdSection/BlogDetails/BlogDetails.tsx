import React from "react";
import Id from "@/styles/id.module.css";
import Image from "next/image";

type Props = {
  image: string;
  description: string;
};

const BlogDetails = (props: Props) => {
  const { description, image } = props;
  return (
    <div>
      <section className={Id.content_section}>
        <div className={Id.content_wrapper}>
          <div className={Id.image_box}>
            <Image src={image} width={500} height={500} alt="Illustration" />
          </div>
          <div
            className={Id.text_box}
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
