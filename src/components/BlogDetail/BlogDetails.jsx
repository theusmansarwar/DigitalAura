import React from "react";
import MainHead from "../components/DetailHead/MainHead";
import PopularPostsSidebar from "../components/popular/Popular";
import LatestBlog from "../components/latestBlogs/LatestBlog";
import LeftDetail from "../components/leftDetail/LeftDetail";
import "./BlogDetail.css";
import Button2 from "../Buttons/Button2";

const BlogDetails = () => {
  return (
    <>
      <Button2 label="Category" />
      <MainHead />
      <div className="main-section">
        <LeftDetail />
        <PopularPostsSidebar />
      </div>
      <LatestBlog />
    </>
  );
};

export default BlogDetails;
