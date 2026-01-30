import { useMemo } from 'react';
import { useParams } from 'react-router';
import { useCmsConfig } from '@/hooks/useCmsConfig';
import { useNewsQuery } from '@/hooks/useNews';
import { decodeArticleUrl } from '@/utils/article';
import type { NewsArticle } from '@/types/news';
import { InvalidArticleId } from '@/components/ArticleDetailsPage/InvalidArticleId';
import { ArticleLoading } from '@/components/ArticleDetailsPage/ArticleLoading';
import { ArticleContent } from '@/components/ArticleDetailsPage/ArticleContent';
import { NotFoundPage } from './NotFoundPage';

export function ArticleDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const cms = useCmsConfig();
  const sources = cms.data?.allowedSources?.map((s) => s.id).join(',') ?? '';
  const topics = cms.data?.topics ?? [];

  const news = useNewsQuery(sources, topics);

  const article = useMemo<NewsArticle | null>(() => {
    if (!id) return null;
    const url = decodeArticleUrl(id);
    return (news.data?.articles ?? []).find((a: any) => a.url === url) ?? null;
  }, [id, news.data?.articles]);

  if (!id) {
    return <InvalidArticleId />;
  }

  if (cms.isLoading || news.isLoading) {
    return <ArticleLoading />;
  }

  if (!article) {
    return <NotFoundPage />;
  }

  return <ArticleContent article={article} />;
}
