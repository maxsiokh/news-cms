import { Calendar, Tag, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { NewsArticle } from '@/types/news';
import { formatArticleDate } from '@/utils/article';

interface ArticleBodyProps {
  article: NewsArticle;
}

export function ArticleBody({ article }: ArticleBodyProps) {
  const sourceName = article.source?.name ?? 'Unknown Source';
  const topicLabel = article.detectedTopic ?? 'Other';

  return (
    <div className='p-6 md:p-10 space-y-6'>
      <div className='flex flex-wrap items-center gap-3'>
        <Badge variant='secondary' className='text-sm px-3 py-1'>
          {sourceName}
        </Badge>
        <Badge variant='outline' className='text-sm px-3 py-1 gap-1.5'>
          <Tag className='size-3.5' />
          {topicLabel}
        </Badge>
      </div>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight'>
        {article.title}
      </h1>
      <div className='flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground'>
        <div className='flex items-center gap-2'>
          <Calendar className='size-4' />
          <time dateTime={article.publishedAt}>
            {formatArticleDate(article.publishedAt)}
          </time>
        </div>
        {article.author && (
          <div className='flex items-center gap-2'>
            <User className='size-4' />
            <span>{article.author}</span>
          </div>
        )}
      </div>

      <Separator className='my-6' />

      {article.description && (
        <div className='prose prose-lg max-w-none'>
          <p className='text-lg md:text-xl leading-relaxed text-foreground/90 font-medium'>
            {article.description}
          </p>
        </div>
      )}
      <div className='prose prose-base md:prose-lg max-w-none pt-4'>
        {article.content ? (
          <div className='text-base md:text-lg leading-relaxed text-foreground/80 whitespace-pre-line'>
            {article.content}
          </div>
        ) : (
          <p className='text-base text-muted-foreground italic'>
            Full content is not available for this article.
          </p>
        )}
      </div>
    </div>
  );
}
