import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'

const Navbar = () => {
  return (
    <Box component="nav" sx={{ display: 'flex', gap: 2 }}>
      <Button component={Link} to="/dashboard" color="inherit">
        Inicio
      </Button>
      <Button component={Link} to="/proyectos" color="inherit">
        Proyectos
      </Button>
      <Button component={Link} to="/perfil" color="inherit">
        Mi Perfil
      </Button>
    </Box>
  )
}

export default Navbar