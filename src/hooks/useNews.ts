import type { CmsTopic } from '@/types/cms';
import { detectTopic } from '@/utils/detectTopic';
import { useQuery } from '@tanstack/react-query';

export function useNewsQuery(source: string, topics: CmsTopic[]) {
  return useQuery({
    queryKey: ['news', source, topics],
    queryFn: async () => {
      const res = await fetch(`/api/news?sources=${source}`);

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
