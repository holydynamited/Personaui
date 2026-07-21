import { createBrowserRouter } from "react-router";

import AppLayout from "@/app/layouts/AppLayout";
import Profile from "@/app/pages/Profile";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Profile />,
      },
    ],
  },
]);