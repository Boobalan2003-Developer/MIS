import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

import Registrationpage from './Registrationpage';
import Dashboard from './Dashboard';
import Mirdula from './Mirudula';
import ErrorPage from './ErrorPage';   // new import

const router = createHashRouter([
  {
    path: '/',
    element: <Mirdula />,
    errorElement: <ErrorPage />   // proper error boundary
  },
  {
    path: '/Registrationpage',
    element: <Registrationpage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/Dashboard',
    element: <Dashboard />,
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
