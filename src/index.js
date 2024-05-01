import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import UserDetails from './Components/UserDetails';
import CityDetails from './Components/CityDetails';
import ErrorPage from './Components/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />}>
      <Route path="" element={<Dashboard />} />
      <Route path="user/:userId" element={<UserDetails />} />
      <Route path="city" element={<CityDetails />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
