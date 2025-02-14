import { type FC, type PropsWithChildren } from 'react'
import { Navigate } from 'react-router'
import { ROUTES } from 'router/constants'

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  // eslint-disable-next-line no-constant-condition
  if (true) {
    return <Navigate to={ROUTES.HOME} />
  }

  return children
}
