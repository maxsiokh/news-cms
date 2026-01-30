import type { NewsArticle } from '@/types/news';

interface ArticleHeroProps {
  article: NewsArticle;
}

export function ArticleHero({ article }: ArticleHeroProps) {
  if (!article.urlToImage) return null;

  return (
    <div className='relative w-full h-[300px] md:h-[450px] overflow-hidden bg-muted'>
      <img
        src={article.urlToImage}
        alt={article.title}
        className='w-full h-full object-cover'
        loading='eager'
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
}
