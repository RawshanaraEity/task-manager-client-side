import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errorpage from './Pages/ErrorPage';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Layout/Dashboard';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import CreateTask from './Pages/Dashboard/CreateTask';
import Calender from './Pages/Dashboard/Calender';
import PrevioustTask from './Pages/Dashboard/PrevioustTask';
import List from './Pages/Dashboard/List';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: 'create-task',
            element: <CreateTask></CreateTask>
          },
          {
            path: 'list',
            element: <List></List>
          },
          {
            path: 'previous-task',
            element: <PrevioustTask></PrevioustTask>
          },
          {
            path: 'calender',
            element: <Calender></Calender>
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthProvider>
        <RouterProvider router={router} />
        </AuthProvider>
  </React.StrictMode>,
)
