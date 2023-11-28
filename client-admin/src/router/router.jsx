import {
    createBrowserRouter,
    redirect,
    RouterProvider,
  } from "react-router-dom";

import LoginView from '../views/LoginView'
import LayoutAdmin from "../components/LayoutAdmin";
import BeveragesView from "../views/BeveragesView";
import CategoriesView from "../views/CategoriesView";
import FormNewBev from "../views/FormNewBev"
import FormNewCat from "../views/FormNewCat";
import FormRegisterAdmin from "../views/FormRegisterAdmin";

  const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginView/>
    },
    {
        element: <LayoutAdmin/>,
        loader: () => {
            if(!localStorage.access_token) {
                return redirect('/login')
            }
            return null 
        }, 
        children: [
            {
                path: '/beverages',
                element: <BeveragesView/>
            },
            {
                path: '/categories',
                element: <CategoriesView/>
            },
            {
                path: '/create-beverages',
                element: <FormNewBev/>
            },
            {
                path: '/edit-beverages/:id',
                element: <FormNewBev/>
            },
            {
                path: '/create-categories',
                element: <FormNewCat/>
            },
            {
                path: '/edit-categories/:id',
                element: <FormNewCat/>
            },
            {
                path: '/create-admin',
                element: <FormRegisterAdmin/>
            }
        ]
    }
  ]);

  export default router