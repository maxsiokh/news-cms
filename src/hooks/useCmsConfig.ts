import { useQuery } from '@tanstack/react-query';
import { fetchCmsConfig } from '@/api/fetchCmsConfig';

export function useCmsConfig() {
  return useQuery({ queryKey: ['cms-config'], queryFn: fetchCmsConfig });
}
