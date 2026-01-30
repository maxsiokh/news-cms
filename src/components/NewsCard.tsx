import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, Tag } from 'lucide-react';
import type { NewsArticle } from '@/types/news';
import { Link } from 'react-router';

interface NewsCardProps {
  article: NewsArticle;
  onOpen?: (article: NewsArticle) => void;
}

export function NewsCard({ article, onOpen }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('uk-UA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <Card className='h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow'>
      {article.urlToImage && (
        <div className='w-full h-48 overflow-hidden bg-muted'>
          <img
            src={article.urlToImage}
            alt={article.title}
            className='w-full h-full object-cover'
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}

      <CardHeader className='flex-none'>
        <div className='flex items-start justify-between gap-2 mb-2'>
          <Badge variant='secondary' className='text-xs'>
            {article.source.name}
          </Badge>
          {article.detectedTopic ? (
            <Badge variant='ghost' className='text-xs'>
              <Tag className='size-3.5' />
              {article.detectedTopic}
            </Badge>
          ) : (
            <Badge variant='ghost' className='text-xs'>
              <Tag className='size-3.5' />
              Other
            </Badge>
          )}
        </div>
        <CardTitle className='line-clamp-2 text-lg'>{article.title}</CardTitle>
        <CardDescription className='line-clamp-3'>
          {article.description || 'Немає опису'}
        </CardDescription>
      </CardHeader>

      <CardContent className='flex-grow'>
        <div className='flex flex-col gap-2 text-sm text-muted-foreground'>
          {article.author && (
            <div className='flex items-center gap-2'>
              <User className='h-4 w-4' />
              <span className='truncate'>{article.author}</span>
            </div>
          )}
          <div className='flex items-center gap-2'>
            <Calendar className='h-4 w-4' />
            <span>{formatDate(article.publishedAt)}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className='flex items-center gap-3'>
        {onOpen && (
          <Button variant='secondary' size='sm' onClick={() => onOpen(article)}>
            Details
          </Button>
        )}
        <Link to={`/article/${encodeURIComponent(article.url)}`} className='underline'>
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
}
