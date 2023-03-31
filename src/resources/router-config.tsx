import { createBrowserRouter } from "react-router-dom";

import Home from '../pages/Home'
import Insect from '../pages/Insect'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "insect/:id",
    element: <Insect />
  }
])

export default router
