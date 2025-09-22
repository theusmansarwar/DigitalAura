export function GET() {
  const content = `User-agent: *
Disallow:

Sitemap: https://digitalaura.se/sitemap.xml`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}