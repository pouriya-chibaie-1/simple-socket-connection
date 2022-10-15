import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Test from './test';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App/>,
  },
  {
    path: "/test",
    element: <Test/>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
