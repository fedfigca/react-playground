import { Paper, Typography } from "@mui/material"

import logo from '../assets/fig-dev-logo.png'
import './header.scss'

/**
 *
 * @returns {React.ReactNode} The Header component
 */
function Header() {

  return (
    <Paper className="igalore__header" square elevation={3}>
      <a className="igalore__header-logo" href="/" title="Home">
        <img className="igalore__header-logo-image" src={logo} alt="Figueroa Development" />
        <Typography variant="h3">Insect Galore!</Typography>
      </a>
    </Paper>
  )
}

export default Header
