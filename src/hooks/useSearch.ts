import type { NewsArticle } from '@/types';
import { useMemo } from 'react';

export function useSearch<T extends NewsArticle>(articles: T[], query: string) {
  return useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return articles;

    return articles.filter((a) => (a.title ?? '').toLowerCase().includes(q));
  }, [articles, query]);
}
