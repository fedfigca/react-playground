import { Paper, Typography } from '@mui/material'
import { Link, useRouteError } from 'react-router-dom'

import './Error.scss'

function ErrorBoundary() {
  const error = useRouteError()
  console.log(error)

  return (
    <Paper className="igalore__error-page" elevation={5}>
      <Typography variant="h5">
        An error ocurred, let's go back <Link to={'/'}>Home</Link>
      </Typography>
    </Paper>
  )
}

export default ErrorBoundary
