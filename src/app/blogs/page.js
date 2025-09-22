import BlogCard from "@/components/blogCards/BlogCard";
import LatestBlog from "@/components/latestBlogs/LatestBlog";
import { Suspense } from "react";
export const metadata = {
  title: "Blogs | Digital Aura",
  description:
    "Discover insights from our digital marketing blog. Get proven strategies, case studies, and expert tips to boost visibility and drive measurable results.",
};
const page = () => {
  return (
    <div style={{ padding: "10px 0" }}>
      <Suspense fallback={<div>Loading blogs...</div>}>
        <BlogCard />
      </Suspense>
      <LatestBlog />
    </div>
  );
};

export default page;
