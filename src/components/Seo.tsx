import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  keywords?: string[];
  structuredData?: Record<string, unknown>;
};

const ensureMetaTag = (selector: string, attrs: Record<string, string>, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    Object.entries(attrs).forEach(([key, value]) => {
      element?.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const ensureLinkTag = (selector: string, attrs: Record<string, string>, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(selector);
  if (!element) {
    element = document.createElement('link');
    Object.entries(attrs).forEach(([key, value]) => {
      element?.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

const ensureScriptTag = (
  selector: string,
  attrs: Record<string, string>,
  content: string
) => {
  let element = document.head.querySelector<HTMLScriptElement>(selector);
  if (!element) {
    element = document.createElement('script');
    Object.entries(attrs).forEach(([key, value]) => {
      element?.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }
  element.text = content;
};

const Seo = ({ title, description, keywords, structuredData }: SeoProps) => {
  useEffect(() => {
    document.title = title;
    ensureMetaTag('meta[name="description"]', { name: 'description' }, description);
    ensureMetaTag('meta[property="og:title"]', { property: 'og:title' }, title);
    ensureMetaTag('meta[property="og:description"]', { property: 'og:description' }, description);
    ensureMetaTag('meta[property="og:url"]', { property: 'og:url' }, window.location.href);
    ensureMetaTag('meta[name="twitter:title"]', { name: 'twitter:title' }, title);
    ensureMetaTag('meta[name="twitter:description"]', { name: 'twitter:description' }, description);
    ensureLinkTag('link[rel="canonical"]', { rel: 'canonical' }, window.location.href);
    ensureMetaTag(
      'meta[name="keywords"]',
      { name: 'keywords' },
      keywords && keywords.length ? keywords.join(', ') : ''
    );

    if (structuredData && Object.keys(structuredData).length) {
      ensureScriptTag(
        'script[data-structured-data="blog"]',
        { type: 'application/ld+json', 'data-structured-data': 'blog' },
        JSON.stringify(structuredData)
      );
    } else {
      const existing = document.head.querySelector('script[data-structured-data="blog"]');
      existing?.remove();
    }
  }, [title, description, keywords, structuredData]);

  return null;
};

export default Seo;
