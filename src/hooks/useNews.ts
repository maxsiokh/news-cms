import type { CmsTopic } from '@/types/cms';
import { detectTopic } from '@/utils/detectTopic';
import { useQuery } from '@tanstack/react-query';

export function useNewsQuery(source: string, topics: CmsTopic[]) {
  return useQuery({
    queryKey: ['news', source, topics],
    queryFn: async () => {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
      );

      if (!res.ok) throw new Error('Failed to fetch news');
      return res.json();
    },
    select: (res) => ({
      ...res,
      articles: res.articles
        .map((a: any) => ({ ...a, detectedTopic: detectTopic(a.title ?? '', topics) }))
        .sort((a: any, b: any) =>
          (a.detectedTopic ?? 'zzzz').localeCompare(b.detectedTopic ?? 'zzzz'),
        ),
    }),
  });
}
