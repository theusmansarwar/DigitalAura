import BlogCard from "@/components/blogCards/BlogCard";
import LatestBlog from "@/components/latestBlogs/LatestBlog";
import { Suspense } from "react";
export const metadata = {
  title: "Blogs | Digital Aura",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae incidunt accusamus, architecto aperiam ullam earum.",
};
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
