import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import { Provider } from 'react-redux'
import store from "./store/index.js";
import { SkeletonTheme } from "react-loading-skeleton";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <App />
  </SkeletonTheme>
    </RouterProvider>
  </Provider>
);
