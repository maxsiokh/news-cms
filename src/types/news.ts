export interface NewsArticle {
  source: NewsSource;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
  detectedTopic?: string | null;
}
export interface NewsSource {
  id?: string | null;
  name?: string;
}

export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}

export interface NewsQueryParams {
  q?: string;
  country?: string;
  pageSize?: number;
  page?: number;
}
