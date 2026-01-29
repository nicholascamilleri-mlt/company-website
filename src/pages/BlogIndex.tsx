import { useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import ConsultationOffer from '../components/ConsultationOffer';
import Seo from '../components/Seo';
import { filterPosts, getAllPosts, getAllTags, paginatePosts } from '../blog/posts';
import styles from './BlogIndex.module.css';

const POSTS_PER_PAGE = 6;

const BlogIndex = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const tag = searchParams.get('tag') ?? '';
  const page = Number(searchParams.get('page') ?? '1');

  const posts = useMemo(() => getAllPosts(), []);
  const tags = useMemo(() => getAllTags(), []);

  const filteredPosts = useMemo(
    () => filterPosts(posts, { query, tag }),
    [posts, query, tag]
  );

  const pagination = useMemo(
    () => paginatePosts(filteredPosts, page, POSTS_PER_PAGE),
    [filteredPosts, page]
  );

  useEffect(() => {
    if (pagination.page !== page) {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.set('page', String(pagination.page));
      setSearchParams(nextParams, { replace: true });
    }
  }, [pagination.page, page, searchParams, setSearchParams]);

  const updateParams = (next: { q?: string; tag?: string; page?: number }) => {
    const nextParams = new URLSearchParams(searchParams);
    if (next.q !== undefined) {
      next.q ? nextParams.set('q', next.q) : nextParams.delete('q');
    }
    if (next.tag !== undefined) {
      next.tag ? nextParams.set('tag', next.tag) : nextParams.delete('tag');
    }
    if (next.page !== undefined) {
      next.page > 1 ? nextParams.set('page', String(next.page)) : nextParams.delete('page');
    }
    setSearchParams(nextParams);
  };

  return (
    <main className={styles.page}>
      <Seo
        title="Blog | TekniLabs"
        description="Practical insights on digital systems, automation, and sustainable growth for modern teams."
      />

      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>TekniLabs blog</p>
          <h1>Practical guidance for modern businesses</h1>
          <p>
            Short, actionable reads for leaders building stronger digital foundations without the noise.
          </p>
        </div>
      </section>

      <section className={styles.controls}>
        <div className={styles.searchBox}>
          <label htmlFor="blog-search">Search</label>
          <input
            id="blog-search"
            type="search"
            value={query}
            placeholder="Search articles"
            onChange={(event) => updateParams({ q: event.target.value, page: 1 })}
          />
        </div>
        <div className={styles.tagFilter}>
          <p>Filter by topic</p>
          <div className={styles.tagList}>
            <button
              type="button"
              className={!tag ? styles.tagActive : styles.tagButton}
              onClick={() => updateParams({ tag: '', page: 1 })}
            >
              All
            </button>
            {tags.map((label) => (
              <button
                key={label}
                type="button"
                className={tag === label ? styles.tagActive : styles.tagButton}
                onClick={() => updateParams({ tag: label, page: 1 })}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.listing}>
        {pagination.items.length ? (
          <div className={styles.grid}>
            {pagination.items.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h2>No articles found</h2>
            <p>Try clearing a filter or searching with a different keyword.</p>
          </div>
        )}

        <div className={styles.pagination}>
          <button
            type="button"
            onClick={() => updateParams({ page: pagination.page - 1 })}
            disabled={pagination.page <= 1}
          >
            Previous
          </button>
          <span>
            Page {pagination.page} of {pagination.totalPages}
          </span>
          <button
            type="button"
            onClick={() => updateParams({ page: pagination.page + 1 })}
            disabled={pagination.page >= pagination.totalPages}
          >
            Next
          </button>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <ConsultationOffer
          title="Plan your next digital move"
          description="Talk with TekniLabs about owning your systems, automating repetitive work, and building the right foundation for growth."
          ctaLabel="Book a strategy chat"
        />
        <div className={styles.backLink}>
          <Link to="/contact">Ready to go deeper? Contact the team.</Link>
        </div>
      </section>
    </main>
  );
};

export default BlogIndex;
