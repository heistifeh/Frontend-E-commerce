import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Cancel from "./pages/Cancel.jsx";
import Cart from "./pages/Cart.jsx";
import Category from "./pages/Category.jsx";
import Favorite from "./pages/Favorite.jsx";
import Orders from "./pages/Orders.jsx";
import Product from "./pages/Product.jsx";
import Profile from "./pages/Profile.jsx";
import Success from "./pages/Success.jsx";
import Layout from "./ui/Layout.jsx";
import NotFound from './Pages/NotFound.jsx';
import App from './App.jsx';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration, // Import ScrollRestoration
} from 'react-router-dom';

const RouterLayout = () => {
  return (
    <Layout>
      <ScrollRestoration />
      <Outlet />
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
]);

// Use createRoot here as per your import
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
