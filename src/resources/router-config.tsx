import { createBrowserRouter, useRouteError } from "react-router-dom";

import Home from '../pages/Home'
import Insect from '../pages/Insect'
import ErrorBoundary from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "insect/:id",
    element: <Insect />,
    errorElement: <ErrorBoundary />
  }
])

export default router
