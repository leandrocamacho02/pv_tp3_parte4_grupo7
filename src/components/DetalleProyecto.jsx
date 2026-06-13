import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import proyectoService from '../services/proyectoService'

const DetalleProyecto = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const proyecto = proyectoService.obtenerProyectos().find(
    (p) => p.id === Number(id)
  )

  if (!proyecto) {
    return (
      <main>
        <div className="detalle-container">
          <p>Proyecto no encontrado.</p>
          <Button variant="contained" onClick={() => navigate('/proyectos')}>
            Volver al listado
          </Button>
        </div>
      </main>
    )
  }

  const { titulo, categoria, estado, descripcion, recursos, equipo } = proyecto

  return (
    <main>
      <div className="detalle-container">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/proyectos')}
          sx={{ mb: 2 }}
        >
          ← Volver
        </Button>

        <h2>{titulo}</h2>
        <p><strong>Categoría:</strong> {categoria}</p>
        <p><strong>Estado:</strong> {estado}</p>

        <h3>Descripción</h3>
        {descripcion.map((parrafo, index) => (
          <p key={index}>{parrafo}</p>
        ))}

        <h3>Recursos</h3>
        <ul>
          {recursos.map((recurso, index) => (
            <li key={index}>
              <a href={recurso.url} target="_blank" rel="noreferrer">
                {recurso.tipo}
              </a>
            </li>
          ))}
        </ul>

        <h3>Equipo</h3>
        <ul>
          {equipo.map((miembro, index) => (
            <li key={index}>
              <strong>{miembro.nombre}</strong> — {miembro.rol}
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default DetalleProyecto