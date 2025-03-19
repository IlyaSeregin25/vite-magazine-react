import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './features/store.js';
import './styles/normolize.css';
import './styles/variables.css';
import './styles/index.css';
import { ROUTES } from './utils/routes.js';
import App from './components/App/App.jsx';
import ErrorPage404 from './components/ErrorPage/ErrorPage404.jsx';
import MainContent from './components/MainContent/MainContent.jsx';
import MainContentSorted from './components/MainContent/MainContentSorted.jsx';
import ProductPage from './components/Products/ProductPage.jsx';
import ProfilePage from './components/Profile/ProfilePage.jsx';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    errorElement: <ErrorPage404 />,
    children: [
      {
        index: true,
        element: <MainContent />,
      },
      {
        path: `${ROUTES.SORT_BY_CATEGORIES}/:sortByCategoriesID`,
        element: <MainContentSorted />,
      },
    ],
  },
  {
    path: `${ROUTES.PRODUCT_PAGE}/:productId`,
    element: <ProductPage />,
  },
  {
    path: `${ROUTES.PROFILE_PAGE}`,
    element: <ProfilePage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
