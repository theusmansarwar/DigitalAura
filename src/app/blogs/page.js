import React from "react";
import BlogHead from "@/components/Blog/BlogHead";
import BlogCard from "@/components/blogCards/BlogCard";
import LatestBlog from "@/components/latestBlogs/LatestBlog";

const page = () => {
  return (
    <div>
      <BlogHead />
      <BlogCard />
      <LatestBlog />
    </div>
  );
};

export default page;
