"use client";

import { useEffect, useState } from "react";
import "./BlogDetail.css";
import Button2 from "../Buttons/Button2";
import MainHead from "../DetailHead/MainHead";
import LeftDetail from "../leftDetail/LeftDetail";
import PopularPostsSidebar from "../popular/Popular";
import LatestBlog from "../latestBlogs/LatestBlog";
import { fetchBlogBySlug } from "@/DAL/Fetch";
import BlogDeatilLoader from "../SkeletonLoaders/BlogDetailLoader";

const BlogDetails = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    const fetchBlog = async () => {
      try {
        const res = await fetchBlogBySlug(slug);
        console.log(res.blog);

        setBlog(res.blog);
      } catch (err) {
        console.error("Error fetching blog details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading) return <BlogDeatilLoader />;
  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="blog-detail">
      <Button2 label={blog.category?.name || "Category"} />
      <MainHead
        title={blog.title}
        date={blog.createdAt}
        author={blog.author}
        thumbnail={blog.thumbnail}
      />
      <div className="main-section">
        <LeftDetail blog={blog} />
        <PopularPostsSidebar />
      </div>
      <LatestBlog />
    </div>
  );
};

export default BlogDetails;
