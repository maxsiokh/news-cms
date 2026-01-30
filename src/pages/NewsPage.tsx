import { NewsFilters } from '@/components/NewsFilters';
import { NewsGrid } from '@/components/NewsGrid';
import { SearchBar } from '@/components/SearchBar';
import { Spinner } from '@/components/ui/spinner';
import { useCmsConfig } from '@/hooks/useCmsConfig';
import { useFilters } from '@/hooks/useFilters';
import { useNewsQuery } from '@/hooks/useNews';
import { useSearch } from '@/hooks/useSearch';
import type { CmsSource } from '@/types';
import type { DateRange } from 'react-day-picker';
import { useState } from 'react';

export function NewsPage() {
  const [query, setQuery] = useState('');
  const [selectedSource, setSelectedSource] = useState<CmsSource | undefined>(undefined);
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  const cms = useCmsConfig();

  const sources = cms.data?.allowedSources?.map((source) => source.id).join(',') ?? '';
  const topics = cms.data?.topics ?? [];

  const { data, isLoading } = useNewsQuery(sources, topics);

  const articles = data?.articles ?? [];

  const searchedArticles = useSearch(articles, query);
  const filteredArticles = useFilters(searchedArticles, selectedSource, dateRange);
  return (
    <div className='container mx-auto px-4 flex flex-col gap-4'>
      <div className='flex justify-center py-6'>
        <SearchBar value={query} onSearch={setQuery} />
      </div>
      <div>
        <NewsFilters
          sources={cms.data?.allowedSources ?? []}
          selectedSource={selectedSource}
          setSelectedSource={setSelectedSource}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
      </div>
      {isLoading ? (
        <div className='flex justify-center items-center h-screen'>
          <Spinner />
        </div>
      ) : (
        <NewsGrid articles={filteredArticles} />
      )}
    </div>
  );
}
