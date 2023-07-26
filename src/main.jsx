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
import AddTask from './components/Manager/AddTask/AddTask';
import AllTasks from './components/Manager/AllTasks/AllTasks';
import Mytasks from './components/Employee/Mytasks';
import TaskDetails from './components/Employee/TaskDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout></DashboardLayout>,
    children:[
      {
        path:'/',
        element:<DashboardHome></DashboardHome>
      },
      {
        path:'/addtask',
        element:<AddTask></AddTask>
      },
      {
        path:'/alltasks',
        element:<AllTasks></AllTasks>,
        loader:()=>fetch('http://localhost:5000/alltasks')
      },
      {
        path:'/mytasks',
        element:<Mytasks></Mytasks>
      },
      {
        path:'/taskdetails/:id',
        element:<TaskDetails></TaskDetails>,
        loader:({params})=>fetch(`http://localhost:5000/taskdetails/${params.id}`)
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
