import type { CmsTopic } from '@/types';

function includesWholeWord(text: string, word: string) {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`\\b${escaped}\\b`, 'i');
  return regex.test(text);
}

export function detectTopic(title: string, topics: CmsTopic[]): string | null {
  for (const topic of topics) {
    for (const kw of topic.keywords) {
      if (includesWholeWord(title, kw)) {
        return topic.name;
      } 
    }
  }
  return null;
}
