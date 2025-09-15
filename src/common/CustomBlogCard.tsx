import React from "react";
import Image from "next/image";
import Link from "next/link";
import Blog from "@/styles/blog.module.css";
import { formatDate } from "@/utils";

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

const CustomBlogCard = ({ blogList = [] }: Props) => {
  return (
    <div className={Blog.blog_cards}>
      {blogList.map((blog) => (
        <Link
          href={`/blogs/${blog.slug}`}
          key={blog._id}
          className={Blog.card_link}
        >
          <div className={Blog.card}>
            <div className={Blog.card_image}>
              <span className={Blog.tag}>Digital Kaptaan</span>
              <Image
                src={blog.coverImage}
                alt={blog.coverImage}
                width={300}
                height={300}
                priority
              />
            </div>
            <h3>{blog.title}</h3>
            <p className={Blog.meta}>{formatDate(new Date(blog.updatedAt))}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CustomBlogCard;
