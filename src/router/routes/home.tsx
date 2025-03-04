import { Home } from 'pages/Canvas'
import { type RouteObject } from 'react-router'
import { ROUTES } from 'router/constants'

export const homeRoutes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
]
