import { baseUrl } from "@/app/config/Config";
import BlogDetails from "@/components/BlogDetail/BlogDetails";
import { fetchBlogBySlug } from "@/DAL/Fetch";

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const res = await fetchBlogBySlug(slug);
  const blog = res?.blog;
  console.log(res);

  const title = blog?.title || slug.replace(/-/g, " ");
  const description =
    blog?.metaDescription ||
    `Details about ${slug.replace(/-/g, " ")} on Digital Aura.`;
  const image = baseUrl + blog?.thumbnail;
  const url = `https://aurafrontend.ztesting.site/${slug}`;
  return {
    title: `${title} `,
    description: description,
    icons: { icon: "/favicon.svg" },

    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
const page = async ({ params }) => {
  const slug = (await params).slug;

  return (
    <div>
      <BlogDetails slug={slug} />
    </div>
  );
};

export default page;
