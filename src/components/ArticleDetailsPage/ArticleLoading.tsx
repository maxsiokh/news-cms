import { Card, CardContent } from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';

export function ArticleLoading() {
  return (
    <div className='min-h-screen'>
      <div className='container mx-auto px-4 py-16'>
        <Card className='max-w-4xl mx-auto shadow-xl'>
          <CardContent className='flex items-center justify-center gap-3 py-24 text-muted-foreground'>
            <Spinner className='size-6' />
            <span className='text-lg'>Loading article...</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
