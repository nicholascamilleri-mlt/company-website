import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');
const serverEntry = resolve(distDir, 'server', 'entry-server.js');
const baseUrl = 'https://www.teknilabs.com';

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const safeJson = (value) => JSON.stringify(value).replace(/</g, '\\u003c');

const buildUrl = (path) => new URL(path === '/' ? '/' : `${path.replace(/\/$/, '')}/`, baseUrl).toString();

const loadBranding = async () => {
  const brandingPath = resolve(root, 'branding.json');
  const content = await readFile(brandingPath, 'utf-8');
  return JSON.parse(content);
};

const loadBlogPosts = async () => {
  const blogDir = resolve(root, 'src', 'content', 'blog');
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

const buildStructuredData = (route, metadata) => {
  if (route.type === 'post') {
    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: route.title,
      description: route.description,
      datePublished: route.publishDate,
      author: {
        '@type': 'Person',
        name: route.author
      },
      keywords: route.keywords?.join(', '),
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': metadata.url
      }
    };
  }

  if (route.path === '/') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: metadata.companyName,
      url: metadata.url,
      description: route.description
    };
  }

  return null;
};

const renderRoutes = async () => {
  const template = await readFile(resolve(distDir, 'index.html'), 'utf-8');
  const branding = await loadBranding();
  const posts = await loadBlogPosts();
  const { render } = await import(pathToFileURL(serverEntry).href);

  const coreRoutes = [
    {
      path: '/',
      title: 'TekNiLabs | Where Skills Meet Systems',
      description:
        'TekNiLabs provides training, software development, and technology consulting for practical outcomes.',
      keywords: ['technology consulting', 'software development', 'training', 'digital transformation']
    },
    {
      path: '/consulting',
      title: 'Consulting | TekNiLabs',
      description:
        'Technology consulting that clarifies priorities, aligns systems, and supports growth without the guesswork.',
      keywords: ['technology consulting', 'digital strategy', 'systems alignment']
    },
    {
      path: '/software-development',
      title: 'Software Development | TekNiLabs',
      description:
        'Custom software development focused on clarity, automation, and long-term ownership of your systems.',
      keywords: ['software development', 'automation', 'business systems']
    },
    {
      path: '/training',
      title: 'Training | TekNiLabs',
      description:
        'Hands-on training programs that help teams adopt modern tools, automation, and digital workflows.',
      keywords: ['training', 'automation training', 'digital skills']
    },
    {
      path: '/business-technology-roadmap',
      title: 'Business Technology Roadmap | TekNiLabs',
      description:
        'A guided roadmap session that connects your business goals to the right systems and automation.',
      keywords: ['technology roadmap', 'systems planning', 'automation strategy']
    },
    {
      path: '/who-we-are',
      title: 'Who We Are | TekNiLabs',
      description:
        'Meet the TekNiLabs team dedicated to helping businesses build resilient, automated systems.',
      keywords: ['TekNiLabs team', 'technology partner']
    },
    {
      path: '/contact',
      title: 'Contact | TekNiLabs',
      description:
        'Connect with TekNiLabs to discuss your next automation, software, or consulting initiative.',
      keywords: ['contact', 'consultation', 'technology partner']
    },
    {
      path: '/blog',
      title: 'Blog | TekNiLabs',
      description:
        'Practical insights on digital systems, automation, and growth for leaders building stronger operations.',
      keywords: ['business automation', 'digital systems', 'operations']
    }
  ];

  const blogRoutes = posts.map((post) => ({
    path: `/blog/${post.slug}`,
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    publishDate: post.publishDate,
    author: post.author,
    type: 'post'
  }));

  const routes = [...coreRoutes, ...blogRoutes];

  await Promise.all(
    routes.map(async (route) => {
      const url = buildUrl(route.path);
      const html = render(route.path, branding);
      const metadata = {
        url,
        companyName: branding.companyName
      };
      const structuredData = buildStructuredData(route, metadata);
      const structuredTag = structuredData
        ? `<script type="application/ld+json">${safeJson(structuredData)}</script>`
        : '';

      const page = template
        .replace('<!--app-html-->', html)
        .replaceAll('__TITLE__', escapeHtml(route.title))
        .replaceAll('__DESCRIPTION__', escapeHtml(route.description))
        .replaceAll('__KEYWORDS__', escapeHtml(route.keywords?.join(', ') ?? ''))
        .replaceAll('https://www.teknilabs.com/', escapeHtml(url))
        .replace('<!--structured-data-->', structuredTag)
        .replace('/*__BRANDING_DATA__*/ null', safeJson(branding));

      const outputDir = route.path === '/' ? distDir : resolve(distDir, route.path.slice(1));
      const outputPath = resolve(outputDir, 'index.html');
      await mkdir(outputDir, { recursive: true });
      await writeFile(outputPath, page, 'utf-8');
    })
  );
};

await renderRoutes();
