import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Dashboard from './pages/Dashboard.tsx';
import DashboardLayout from './components/DashboardLayout.tsx';
import { Toaster } from 'sonner';
import Schools from './pages/Schools.tsx';
import SchoolProfile from './pages/SchoolProfile.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout><Dashboard /></DashboardLayout>
  },
  {
    path: "/schools",
    element: <DashboardLayout><Schools /></DashboardLayout>
  },
  {
    path: "/schools/:id",
    element: <DashboardLayout><SchoolProfile /></DashboardLayout>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster richColors />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
