import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './components/login';
import {Home} from './components/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,

  },
  {
    path: '/home',
    element: <Home />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);