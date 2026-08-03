import { createBrowserRouter } from "react-router";

import AppLayout from "@/app/layouts/AppLayout";
import Profile from "@/app/pages/Profile";
import EditProfile from "../pages/EditProfile";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path:"/profile/edit",
        element:<EditProfile/>
      }
    ],
  },
]);