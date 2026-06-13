import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/proyectos">Proyectos</NavLink></li>
        <li><NavLink to="/perfil">Mi Perfil</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar