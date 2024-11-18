import { RouteObject } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout';
import PageNotFoundView from '@components/common/PageNotFoundView';
import Home from '@pages/Home';

const routes: RouteObject[] = [];

const mainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '/', element: <Home /> },
    { path: '404', element: <PageNotFoundView /> },
    { path: '*', element: <PageNotFoundView /> },
  ],
};

routes.push(mainRoutes);

export default routes;
