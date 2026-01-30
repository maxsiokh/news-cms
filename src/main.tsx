import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router';
import './index.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NewsPage } from '@/pages/NewsPage.tsx';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage.tsx';
import { NotFoundPage } from '@/pages/NotFoundPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <NewsPage /> },
      { path: 'article/:id', element: <ArticleDetailsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);
