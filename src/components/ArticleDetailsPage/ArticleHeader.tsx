import { Link } from 'react-router';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ArticleHeaderProps {
  articleUrl: string;
}

export function ArticleHeader({ articleUrl }: ArticleHeaderProps) {
  return (
    <div className='flex flex-wrap items-center justify-between gap-4'>
      <Button asChild variant='ghost' size='lg' className='gap-2'>
        <Link to='/'>
          <ArrowLeft className='size-4' />
          Back to news feed
        </Link>
      </Button>
      <Button asChild variant='outline' size='lg' className='gap-2'>
        <a href={articleUrl} target='_blank' rel='noreferrer'>
          <ExternalLink className='size-4' />
          Read original
        </a>
      </Button>
    </div>
  );
}
