import { Link } from 'react-router-dom';
import type { BlogPost } from '../blog/types';
import styles from './BlogCard.module.css';

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <article className={styles.card}>
      {post.featuredImage && (
        <div className={styles.imageWrapper}>
          <img src={post.featuredImage} alt="" loading="lazy" />
        </div>
      )}
      <div className={styles.body}>
        <p className={styles.meta}>
          <span>{formatDate(post.publishDate)}</span>
          <span aria-hidden="true">•</span>
          <span>{post.author}</span>
        </p>
        <h3 className={styles.title}>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className={styles.summary}>{post.summary}</p>
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
