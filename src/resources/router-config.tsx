import { createBrowserRouter, useRouteError } from "react-router-dom";

import Home from '../pages/Home'
import Insect from '../pages/Insect'
import ErrorBoundary from '../pages/Error'
import NotFound from '../pages/Not-found'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'insect/:id',
    element: <Insect />,
    errorElement: <ErrorBoundary />
  },
  {
    path: 'error',
    element: <ErrorBoundary />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router
