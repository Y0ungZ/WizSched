import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { ROUTE_PATH } from '@/constants/path';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: ROUTE_PATH.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
