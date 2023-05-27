import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import PrivateRoute from "./PrivateRoute";
import Bookings from "../Pages/Bookings/Bookings";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'checkout/:id',
        element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:'bookings',
        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
      }
    ],
  },
]);
export default router;
