import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import HomeView from "../views/HomeView";
  import MenuView from "../views/MenuView";
  import DetailView from '../views/DetailView'
  import LayoutHome from "../components/LayoutHome";


  const router = createBrowserRouter([
    {
        element: <LayoutHome/>,
        children: [
            {
                path: '/',
                element: <HomeView/>
            },
            {
                path: '/beverages',
                element: <MenuView/>
            },
            {
                path: '/beverages/:id',
                element: <DetailView/>
            },
        ]
    },
  ]);

  export default router