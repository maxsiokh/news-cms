export function decodeArticleUrl(id: string): string {
  return decodeURIComponent(id);
}

export function formatArticleDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('uk-UA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}
