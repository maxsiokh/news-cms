import type { CmsSource, NewsArticle } from '@/types';
import type { DateRange } from 'react-day-picker';
import { useMemo } from 'react';

export function useFilters<T extends NewsArticle>(
  items: T[],
  selectedSource?: CmsSource,
  dateRange?: DateRange,
) {
  return useMemo(() => {
    const startDate = dateRange?.from ? new Date(dateRange.from) : null;
    const endDateExclusive = dateRange?.to ? new Date(dateRange.to) : null;

    if (endDateExclusive) {
      endDateExclusive.setDate(endDateExclusive.getDate() + 1);
    }

    return items.filter((item) => {
      if (selectedSource && item.source?.id !== selectedSource.id) return false;
      if (!startDate && !endDateExclusive) return true;

      const publishedAt = item.publishedAt ? new Date(item.publishedAt) : null;
      if (!publishedAt || Number.isNaN(publishedAt.getTime())) return false;

      if (startDate && publishedAt < startDate) return false;
      if (endDateExclusive && publishedAt >= endDateExclusive) return false;
      return true;
    });
  }, [items, selectedSource, dateRange]);
}
