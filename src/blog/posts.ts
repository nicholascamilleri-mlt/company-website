import type { BlogListingFilters, BlogPost } from './types';

const postModules = import.meta.glob<BlogPost>('/src/content/blog/*.json', {
  eager: true,
  import: 'default'
});

const normalizePost = (post: BlogPost) => ({
  ...post,
  tags: post.tags.map((tag) => tag.trim()).filter(Boolean)
});

const sortByDateDesc = (posts: BlogPost[]) =>
  [...posts].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

export const getAllPosts = (): BlogPost[] => {
  const posts = Object.values(postModules).map(normalizePost);
  return sortByDateDesc(posts);
};

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  getAllPosts().find((post) => post.slug === slug);

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  getAllPosts().forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort((a, b) => a.localeCompare(b));
};

export const filterPosts = (posts: BlogPost[], filters: BlogListingFilters): BlogPost[] => {
  const normalizedQuery = filters.query?.trim().toLowerCase();
  const normalizedTag = filters.tag?.trim().toLowerCase();

  return posts.filter((post) => {
    if (normalizedTag && !post.tags.some((tag) => tag.toLowerCase() === normalizedTag)) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const haystack = [
      post.title,
      post.summary,
      post.content,
      post.author,
      post.tags.join(' ')
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
};

export const paginatePosts = (posts: BlogPost[], page: number, pageSize: number) => {
  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const startIndex = (safePage - 1) * pageSize;

  return {
    page: safePage,
    totalPages,
    items: posts.slice(startIndex, startIndex + pageSize)
  };
};
