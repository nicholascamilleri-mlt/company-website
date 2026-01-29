export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  author: string;
  publishDate: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  featuredImage?: string;
};

export type BlogListingFilters = {
  query?: string;
  tag?: string;
};
