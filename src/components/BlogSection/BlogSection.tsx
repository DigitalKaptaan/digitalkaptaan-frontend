    import React from "react";
    import Image from "next/image";
    import Link from "next/link";
    import Blog from "@/styles/blog.module.css";

    const blogList = [
    {
        id: 1,
        href: "#",
        tag: "MARKETING",
        image: "/assets/BlogPage/066.jpg",
        title: "10+ Best Hosting for WordPress",
        meta: "Ter@Admin • August 31, 2022",
    },
    {
        id: 2,

        href: "#",
        tag: "BUSINESS",
        image: "/assets/BlogPage/077.jpg",
        title: "10+ Best Free WordPress Theme",
        meta: "Ter@Admin • August 31, 2022",
    },
    {
        id: 3,

        href: "#",
        tag: "IT Consulting",
        image: "/assets/BlogPage/011.jpg",
        title: "13+ Best WordPress Business",
        meta: "Ter@Admin • August 31, 2022",
    },
    {
        id: 4,

        href: "#",
        tag: "Uncategorized",
        image: "/assets/BlogPage/blog1.jpg",
        title: "Droit Addons for Elementor",
        meta: "Ter@Admin • August 31, 2022",
    },
    {
        id: 5,
        href: "#",
        tag: "Featured",
        image: "/assets/BlogPage/blog2.jpg",
        title: "Add Dark Mode WordPress",
        meta: "Ter@Admin • August 31, 2022",
    },
    {
        id: 6,
        href: "#",
        tag: "Featured",
        image: "/assets/BlogPage/077.jpg",
        title: "What Makes Saasland The Best",
        meta: "Ter@Admin • August 31, 2022",
    },
    {
        id: 7,

        href: "#",
        tag: "Fashion",
        image: "/assets/BlogPage/01.webp",
        title: "Doloremque velit sapien labore",
        meta: "Ter@Admin • August 31, 2022",
    },
    {
        id: 8,

        href: "#",
        tag: "Video Post",
        image: "/assets/BlogPage/02.webp",
        title: "Aliquam mollit nemo taciti",
        meta: "Ter@Admin • August 31, 2022",
    },
    {
        id: 9,
        href: "#",
        tag: "Fashion",
        image: "/assets/BlogPage/03.webp",
        title: "Interdum luctus accu samus",
        meta: "Ter@Admin • August 31, 2022",
    },
    ];

    const BlogSection = () => {
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
            <Link href={blog.href} key={blog.id} className={Blog.card_link} >
                <div className={Blog.card}>
                <div className={Blog.card_image}>
                    <span className={Blog.tag}>{blog.tag}</span>
                    <Image
                    src={blog.image}
                    alt={blog.tag}
                    width={300}
                    height={300}
                    />
                </div>
                <h3>{blog.title}</h3>
                <p className={Blog.meta}>{blog.meta}</p>
                </div>
            </Link>
            ))}
        </div>
        </section>
    );
    };

    export default BlogSection;
