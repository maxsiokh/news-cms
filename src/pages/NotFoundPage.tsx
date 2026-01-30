import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function NotFoundPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center px-4'>
      <div className='max-w-2xl w-full text-center space-y-8'>
        <div className='relative'>
          <h1 className='text-9xl md:text-[12rem] font-bold text-muted/20 select-none'>
            404
          </h1>
          <div className='absolute inset-0 flex items-center justify-center'>
            <Search className='size-20 md:size-24 text-muted-foreground/40' />
          </div>
        </div>
        <div className='space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>Not Found</h2>
          <p className='text-lg text-muted-foreground max-w-md mx-auto'>
            The page you are looking for does not exist. It might have been
          </p>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'>
          <Button asChild size='lg' className='gap-2 min-w-[200px]'>
            <Link to='/'>
              <Home className='size-4' />
              Go to Home
            </Link>
          </Button>
          <Button asChild variant='outline' size='lg' className='gap-2 min-w-[200px]'>
            <Link to='/'>View News</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
