import { Paper, Typography } from '@mui/material'
import { Link, useRouteError } from 'react-router-dom'

import logo from '../assets/fig-dev-logo.png'
import './Error.scss'

/**
 *
 * @returns {React.ReactNode} The Error Page component
 */
function ErrorBoundary() {
  const error = useRouteError()
  console.log(error)

  return (
    <Paper className="igalore__error-page" elevation={5}>
      <img src={logo} alt="Figueroa Development" className="igalore__error-image" />
      <Typography variant="h5">
        An error ocurred, let's go back <Link to={'/'}>Home</Link>
      </Typography>
    </Paper>
  )
}

export default ErrorBoundary
