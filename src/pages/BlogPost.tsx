import { useMemo } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ConsultationOffer from '../components/ConsultationOffer';
import Seo from '../components/Seo';
import { getPostBySlug } from '../blog/posts';
import { renderMarkdown } from '../utils/markdown';
import styles from './BlogPost.module.css';

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

const BlogPost = () => {
  const { slug } = useParams();
  const location = useLocation();
  const post = slug ? getPostBySlug(slug) : undefined;

  const canonicalUrl = useMemo(() => {
    if (typeof window === 'undefined') {
      return '';
    }
    return `${window.location.origin}${location.pathname}`;
  }, [location.pathname]);

  if (!post) {
    return (
      <main className={styles.page}>
        <Seo
          title="Blog Post Not Found | TekniLabs"
          description="The blog post you are looking for is not available."
        />
        <section className={styles.notFound}>
          <h1>We couldn't find that article.</h1>
          <p>Try heading back to the blog to explore the latest insights.</p>
          <Link to="/blog">Back to the blog</Link>
        </section>
      </main>
    );
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    datePublished: post.publishDate,
    author: {
      '@type': 'Person',
      name: post.author
    },
    keywords: post.keywords.join(', '),
    image: post.featuredImage ? [post.featuredImage] : undefined,
    mainEntityOfPage: canonicalUrl ? { '@type': 'WebPage', '@id': canonicalUrl } : undefined
  };

  return (
    <main className={styles.page}>
      <Seo
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.keywords}
        structuredData={structuredData}
      />

      <article className={styles.article}>
        <Link to="/blog" className={styles.backLink}>
          ← Back to all posts
        </Link>
        <header className={styles.header}>
          <p className={styles.kicker}>TekniLabs insights</p>
          <h1>{post.title}</h1>
          <p className={styles.summary}>{post.summary}</p>
          <div className={styles.meta}>
            <span>{formatDate(post.publishDate)}</span>
            <span aria-hidden="true">•</span>
            <span>{post.author}</span>
          </div>
          <div className={styles.tagRow}>
            {post.tags.map((tag) => (
              <Link key={tag} to={`/blog?tag=${encodeURIComponent(tag)}`} className={styles.tag}>
                {tag}
              </Link>
            ))}
          </div>
        </header>

        {post.featuredImage && (
          <div className={styles.featuredImage}>
            <img src={post.featuredImage} alt="" loading="lazy" />
          </div>
        )}

        <div className={styles.content}>{renderMarkdown(post.content)}</div>
      </article>

      <section className={styles.ctaSection}>
        <ConsultationOffer
          title="See what a tailored system could do for you"
          description="Share your goals with TekniLabs and we will outline a practical path from today’s tools to a system you own and control."
          ctaLabel="Book a free 30-minute conversation"
          ctaHref="/business-technology-roadmap"
        />
        <div className={styles.moreLinks}>
          <Link to="/blog">Browse more articles</Link>
          <Link to="/contact">Contact the team</Link>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
