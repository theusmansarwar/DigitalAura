import { invokeApi } from "../utils/InvokeApi";

export const fetchallBloglist = async (page, rowsPerPages) => {
  const reqObj = {
    path: `/blog/list?limit=${rowsPerPages}&page=${page}`,
    method: "GET",
    headers: {},

    body: {},
  };
  return invokeApi(reqObj);
};

export const fetchBlogBySlug = async (id) => {
  const reqObj = {
    path: `/blog/view/${id}`,
    method: "GET",
    headers: {},

    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchFeaturedBlog = async () => {
  const reqObj = {
    path: `/blog/featured`,
    method: "GET",
    headers: {},

    body: {},
  };
  return invokeApi(reqObj);
};
export const getblogSlugs = async () => {
  const reqObj = {
    path: `/blog/sluglist`,
    method: "GET",
    headers: {},

    body: {},
  };
  return invokeApi(reqObj);
};
