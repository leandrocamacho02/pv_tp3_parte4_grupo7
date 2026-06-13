import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './views/Dashboard'
import ListaProyectos from './components/ListaProyectos'
import DetalleProyecto from './components/DetalleProyecto'
import PerfilUsuario from './views/PerfilUsuario'
import './css/styles.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/proyectos" element={<ListaProyectos />} />
          <Route path="/perfil" element={<PerfilUsuario />} />
          <Route path="/proyectos/:id" element={<DetalleProyecto />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App