import type { NewsArticle } from '@/types/news';
import { ArticleHeader } from './ArticleHeader';
import { ArticleHero } from './ArticleHero';
import { ArticleBody } from './ArticleBody';
import { ArticleFooter } from './ArticleFooter';

interface ArticleContentProps {
  article: NewsArticle;
}

export function ArticleContent({ article }: ArticleContentProps) {
  return (
    <div className='min-h-screen'>
      <div className='container mx-auto px-4 py-8 md:py-12'>
        <div className='max-w-4xl mx-auto space-y-8'>
          <ArticleHeader articleUrl={article.url} />
          <article className='bg-card rounded-xl shadow-2xl overflow-hidden border border-border/50'>
            <ArticleHero article={article} />
            <ArticleBody article={article} />
            <ArticleFooter article={article} />
          </article>
        </div>
      </div>
    </div>
  );
}
