import React from "react";
import Image from "next/image";
import Link from "next/link";
import Blog from "@/styles/blog.module.css";
import { formatDate } from "@/utils";

type Props = {
  blogList: {
    _id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    slug: string;
    isPublished: boolean;
    createdAt: string;
    updatedAt: string;
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

      <div className={Blog.blog_cards}>
        {blogList.map((blog) => (
          <Link
            href={`/blogs/${blog.slug}`}
            key={blog._id}
            className={Blog.card_link}
          >
            <div className={Blog.card}>
              <div className={Blog.card_image}>
                <span className={Blog.tag}>{blog.category}</span>
                <Image
                  src={blog.image}
                  alt={blog.image}
                  width={300}
                  height={300}
                />
              </div>
              <h3>{blog.title}</h3>
              <p className={Blog.meta}>
                {formatDate(new Date(blog.updatedAt))}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
