import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/home/home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Media from "../pages/media/Media";
import PrivateRoute from "./PrivateRoute";
import BlogDetails from "../pages/blogDetails/BlogDetails";
import { getBlog } from "../api/blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/media",
        element: (
          <PrivateRoute>
            <Media />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog/:id",
        element: (
          <PrivateRoute>
            <BlogDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getBlog(params.id),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
