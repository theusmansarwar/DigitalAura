import React from "react";
import BlogData from "../components/blogData/BlogData";
import BlogHead from "../components/Blog/BlogHead";
import LatestBlog from "../components/latestBlogs/LatestBlog";

const page = () => {
  return (
    <div>
      <BlogHead />
      <BlogData />
      <LatestBlog/>
    </div>
  );
};

export default page;
