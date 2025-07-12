import React from "react";
import Blog from "@/styles/blog.module.css";
import { CustomBlogCard } from "@/common";

type Props = {
  blogList: {
    meta?: {
      keywords?: string[];
      description?: string;
      title?: string;
    };
    _id: string;
    title: string;
    content: string;
    coverImage: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    slug: string;
    __v: number;
  }[];
};

const BlogSection = ({ blogList }: Props) => {
  return (
    <section className={`${Blog.blog_section} ${Blog.bg}`}>
      <div className={Blog.section_header}>
        <span className={Blog.badge}>BLOG LIST</span>
        <h2 style={{ paddingBottom: "55px" }}>
          Read our
          <br />
          <span className={Blog.highlight}>latest </span> articles
        </h2>
      </div>
      <CustomBlogCard blogList={blogList} />
    </section>
  );
};

export default BlogSection;
