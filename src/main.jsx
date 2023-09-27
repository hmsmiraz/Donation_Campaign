import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home';
import Donation from './Pages/Donation/Donation';
import Statistics from './Pages/Statistics/Statistics';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import DonationDetails from './Pages/DonationDetails/DonationDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path : "/",
        element : <Home></Home>,
        loader : ()=> fetch('/data.json')
      },
      {
        path : "/404",
        element : <Home></Home>,
        loader : ()=> fetch('/data.json')
      },
      {
        path : "/donation",
        element : <Donation></Donation>,
      },
      {
        path : "/statistics",
        element : <Statistics></Statistics>,
        loader : ()=> fetch('/data.json')
      },
      {
        path : "/donations/:id",
        element : <DonationDetails></DonationDetails>,
        loader : ()=> fetch('/data.json')
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
