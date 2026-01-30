import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';

export function InvalidArticleId() {
  return (
    <div className='min-h-screen'>
      <div className='container mx-auto px-4 py-16'>
        <Card className='max-w-2xl mx-auto shadow-xl'>
          <CardHeader className='space-y-2'>
            <CardTitle className='text-2xl'>Incorrect news identifier</CardTitle>
            <CardDescription className='text-base'>
              The link appears to be malformed.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant='outline' size='lg'>
              <Link to='/'>
                <ArrowLeft className='mr-2' />
                Back to news feed
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
