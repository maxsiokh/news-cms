import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  onSearch: (query: string) => void;
  value?: string;
}

export function SearchBar({ onSearch, value = '' }: SearchBarProps) {
  const [query, setQuery] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className='relative w-full max-w-xl'>
      <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
      <Input
        type='text'
        placeholder='Search news...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='pl-9 pr-9'
      />
      {query && (
        <Button
          variant='ghost'
          size='sm'
          onClick={handleClear}
          className='absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0'
        >
          <X className='h-4 w-4' />
        </Button>
      )}
    </div>
  );
}
