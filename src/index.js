import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Registrationpage from './Registrationpage';
// import Loginpage from './Loginpage';
import Dashboard from './Dashboard';
// import Enquiryform from './Enquiryform';
// import App from './App';
import Mirdula from './Mirudula';


const router =createBrowserRouter([
  {
    path:'/',
    element:<Mirdula/>
  },
  // {
  //   path:'/Enquiryform',
  //   element:<Enquiryform/>
  // },
  {
    path:'/Registrationpage',
    element:<Registrationpage/>
  },{
    path:'/Dashboard',
    element:<Dashboard/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
