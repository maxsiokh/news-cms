import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const { sources } = req.query;

  if (!sources || typeof sources !== 'string') {
    return res.status(400).json({ error: 'Sources parameter is required' });
  }

  const url = `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
