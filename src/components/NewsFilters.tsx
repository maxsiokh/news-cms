import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { CmsSource } from '@/types';
import { Menu } from 'lucide-react';
import { DatePickerWithRange } from './ui/datepicker-withrange';
import type { DateRange } from 'react-day-picker';

interface Props {
  sources: CmsSource[];
  selectedSource?: CmsSource;
  setSelectedSource?: (source?: CmsSource) => void;
  dateRange?: DateRange;
  setDateRange?: (value?: DateRange) => void;
}

export function NewsFilters({
  sources,
  selectedSource,
  setSelectedSource,
  dateRange,
  setDateRange,
}: Props) {
  return (
    <div className='flex flex-wrap items-center gap-3'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline'>
            <Menu className='h-4 w-4' />
            {selectedSource?.name ?? 'All'}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Filter by source</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => setSelectedSource?.(undefined)}
              className={!selectedSource ? 'font-bold' : ''}
            >
              All
            </DropdownMenuItem>
            {sources.map((source) => (
              <DropdownMenuItem
                onClick={() => setSelectedSource?.(source)}
                key={source.id}
                className={selectedSource?.id === source.id ? 'font-bold' : ''}
              >
                {source.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DatePickerWithRange
        value={dateRange}
        onChange={setDateRange}
        id='news-date-range'
      />
    </div>
  );
}
