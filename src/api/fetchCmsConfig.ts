import type { CmsConfig, CmsTopic, CmsSource } from '@/types';

type SanityResp<T> = { result: T };

function sanityUrl(query: string) {
  const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string;
  const dataset = import.meta.env.VITE_SANITY_DATASET as string;
  const v = import.meta.env.VITE_SANITY_API_VERSION as string;

  const base = `https://${projectId}.apicdn.sanity.io/v${v}/data/query/${dataset}`;
  const url = new URL(base);
  url.searchParams.set('query', query);
  return url;
}

async function fetchJson<T>(url: URL): Promise<T> {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return data as T;
}

export async function fetchCmsConfig(): Promise<CmsConfig> {
  const [sources, topics] = await Promise.all([
    fetchJson<SanityResp<CmsSource[]>>(sanityUrl(`*[_type=="allowedSource"]{id,name}`)),
    fetchJson<SanityResp<CmsTopic[]>>(sanityUrl(`*[_type=="topic"]{name,keywords}`)),
  ]);

  return { allowedSources: sources.result ?? [], topics: topics.result ?? [] };
}
