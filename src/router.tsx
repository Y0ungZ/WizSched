import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import RoutePath from '@/constants/path';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';

const router = createBrowserRouter([
  {
    path: RoutePath.ROOT,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: RoutePath.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
