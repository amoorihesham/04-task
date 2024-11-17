import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import paths from './paths';
import RootLayout from '@/layouts/RootLayout';
const OrderPage = lazy(() => import('@/pages/OrderPage'));

const router = createBrowserRouter([
  {
    path: paths.ROOT,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback='Loading...'>
            <OrderPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
