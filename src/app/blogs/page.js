import BlogCard from "@/components/blogCards/BlogCard";
import LatestBlog from "@/components/latestBlogs/LatestBlog";
import { Suspense } from "react";
const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading blogs...</div>}>
        <BlogCard />
      </Suspense>
      <LatestBlog />
    </div>
  );
};

export default page;
