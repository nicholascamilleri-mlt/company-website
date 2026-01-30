import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const publicDir = resolve(root, 'public');
const blogDir = resolve(root, 'src', 'content', 'blog');
const baseUrl = 'https://www.teknilabs.com';

const coreRoutes = [
  '/',
  '/consulting',
  '/software-development',
  '/training',
  '/business-technology-roadmap',
  '/who-we-are',
  '/contact',
  '/blog'
];

const getBlogPosts = async () => {
  const entries = await readdir(blogDir);
  const posts = await Promise.all(
    entries
      .filter((entry) => entry.endsWith('.json'))
      .map(async (entry) => {
        const content = await readFile(resolve(blogDir, entry), 'utf-8');
        return JSON.parse(content);
      })
  );
  return posts;
};

const buildUrl = (path) => {
  if (path === '/') {
    return new URL('/', baseUrl).toString();
  }
  if (path.includes('.')) {
    return new URL(path, baseUrl).toString();
  }
  return new URL(`${path.replace(/\/$/, '')}/`, baseUrl).toString();
};

const buildSitemap = async () => {
  const posts = await getBlogPosts();
  const urls = [
    ...coreRoutes.map((route) => ({ loc: buildUrl(route) })),
    ...posts.map((post) => ({
      loc: buildUrl(`/blog/${post.slug}`),
      lastmod: post.publishDate
    }))
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((entry) => {
      const lastmod = entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : '';
      return `  <url><loc>${entry.loc}</loc>${lastmod}</url>`;
    }),
    '</urlset>'
  ].join('\n');

  await mkdir(publicDir, { recursive: true });
  await writeFile(resolve(publicDir, 'sitemap.xml'), `${xml}\n`, 'utf-8');

  const robots = ['User-agent: *', 'Allow: /', `Sitemap: ${buildUrl('/sitemap.xml')}`].join(
    '\n'
  );
  await writeFile(resolve(publicDir, 'robots.txt'), `${robots}\n`, 'utf-8');
};

await buildSitemap();
