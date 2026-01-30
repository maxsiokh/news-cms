export type CmsTopic = { name: string; keywords: string[] };
export type CmsSource = { id: string; name: string };
export type CmsConfig = {
  allowedSources: CmsSource[];
  topics: CmsTopic[];
};
