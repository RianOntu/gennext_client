import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashboardLayout from './components/Dashboard/DashboardLayout';
import DashboardHome from './components/Dashboard/DashboardHome';
import AuthenticationProvider from './components/Providers/AuthenticationProvider';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout></DashboardLayout>,
    children:[
      {
        path:'/',
        element:<DashboardHome></DashboardHome>
      }
     
    ]
  },
  {
    
      path:'/register',
      element:<Register></Register>
    
  },
  {
    path:'/login',
    element:<Login></Login>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthenticationProvider>
    <RouterProvider router={router} />
    </AuthenticationProvider>
    
  </React.StrictMode>,
)
