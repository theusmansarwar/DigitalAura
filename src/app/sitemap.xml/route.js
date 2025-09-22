import { fetchServicesSlugs, getblogSlugs } from "@/DAL/Fetch";

export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = "https://digitalaura.se";
  const staticRoutes = [
    "",
    "services",
    "careers",
    "contact-us",
    "about-us",
    "terms-and-condition",
    "privacy-policy",
  ];

  let serviceRoutes = [];
  let blogRoutes = [];
  try {
    const res = await getblogSlugs();
    if (res?.slugs && Array.isArray(res.slugs)) {
      blogRoutes = res.slugs.map((blog) => `blogs/${blog.slug}`);
    }
    const res2 = await fetchServicesSlugs();
    if (res2?.slugs && Array.isArray(res2.slugs)) {
      serviceRoutes = res2.slugs.map((service) => `services/${service.slug}`);
    }
  } catch (error) {
    console.error("Error fetching slugs:", error);
  }
  const allRoutes = [...staticRoutes, ...serviceRoutes, ...blogRoutes];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}/${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${
        route.startsWith("services/") || route.startsWith("blogs/")
          ? "0.7"
          : "0.9"
      }</priority>
    </url>`
    )
    .join("")}
</urlset>`;
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
