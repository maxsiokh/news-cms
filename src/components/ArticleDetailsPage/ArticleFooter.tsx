import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { NewsArticle } from '@/types/news';

interface ArticleFooterProps {
  article: NewsArticle;
}

export function ArticleFooter({ article }: ArticleFooterProps) {
  const sourceName = article.source?.name ?? 'Unknown Source';

  return (
    <>
      <Separator />
      <div className='px-6 md:px-10 py-6 bg-muted/30 flex flex-wrap items-center justify-between gap-4'>
        <div className='text-sm text-muted-foreground'>
          Source: <span className='font-semibold text-foreground'>{sourceName}</span>
        </div>
        <Button asChild variant='default' size='lg' className='gap-2'>
          <a href={article.url} target='_blank' rel='noreferrer'>
            <ExternalLink className='size-4' />
            Read original
          </a>
        </Button>
      </div>
    </>
  );
}
