import { NewsCard } from './NewsCard';
import type { NewsArticle } from '@/types/news';
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle } from './ui/empty';
import { FolderX } from 'lucide-react';

interface NewsGridProps {
  articles: NewsArticle[];
  onOpenArticle?: (article: NewsArticle) => void;
}

export function NewsGrid({ articles, onOpenArticle }: NewsGridProps) {
  if (articles.length === 0) {
    return (
      <div className='flex justify-center items-center '>
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant='icon'>
              <FolderX className='h-12 w-12 text-muted-foreground' />
            </EmptyMedia>
            <EmptyTitle>News not found</EmptyTitle>
          </EmptyHeader>
        </Empty>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {articles.map((article, index) => (
        <NewsCard
          key={`${article.url}-${index}`}
          article={article}
          onOpen={onOpenArticle}
        />
      ))}
    </div>
  );
}
