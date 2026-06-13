import { useState } from "react"
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material'

const FormularioProyecto = ({ onAgregar }) => {
  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: '',
    categoria: '',
    estado: 'En curso',
    descripcion: ['', ''],
    recursos: [
      { tipo: 'PDF', url: '' },
      { tipo: 'GitHub', url: '' },
      { tipo: 'Drive', url: '' }
    ],
    equipo: [{ nombre: '', rol: '' }]
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNuevoProyecto({ ...nuevoProyecto, [name]: value })
  }

  const handleDescripcion = (index, value) => {
    const nuevaDesc = [...nuevoProyecto.descripcion]
    nuevaDesc[index] = value
    setNuevoProyecto({ ...nuevoProyecto, descripcion: nuevaDesc })
  }

  const handleRecurso = (index, value) => {
    const nuevosRecursos = [...nuevoProyecto.recursos]
    nuevosRecursos[index] = { ...nuevosRecursos[index], url: value }
    setNuevoProyecto({ ...nuevoProyecto, recursos: nuevosRecursos })
  }

  const handleEquipo = (index, field, value) => {
    const nuevoEquipo = [...nuevoProyecto.equipo]
    nuevoEquipo[index] = { ...nuevoEquipo[index], [field]: value }
    setNuevoProyecto({ ...nuevoProyecto, equipo: nuevoEquipo })
  }

  const agregarMiembro = () => {
    setNuevoProyecto({
      ...nuevoProyecto,
      equipo: [...nuevoProyecto.equipo, { nombre: '', rol: '' }]
    })
  }

  const handleSubmit = () => {
    if (nuevoProyecto.titulo.trim() === '') return
    onAgregar({ ...nuevoProyecto, id: Date.now() })
    setNuevoProyecto({
      titulo: '',
      categoria: '',
      estado: 'En curso',
      descripcion: ['', ''],
      recursos: [
        { tipo: 'PDF', url: '' },
        { tipo: 'GitHub', url: '' },
        { tipo: 'Drive', url: '' }
      ],
      equipo: [{ nombre: '', rol: '' }]
    })
  }

  return (
    <section className="filtros">
      <h3>Agregar Proyecto</h3>
      <div className="from-filtros">
        <TextField
          label="Título"
          name="titulo"
          value={nuevoProyecto.titulo}
          onChange={handleChange}
          size="small"
        />
        <TextField
          label="Categoría"
          name="categoria"
          value={nuevoProyecto.categoria}
          onChange={handleChange}
          size="small"
        />
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Estado</InputLabel>
          <Select
            name="estado"
            value={nuevoProyecto.estado}
            onChange={handleChange}
            label="Estado"
          >
            <MenuItem value="En curso">En curso</MenuItem>
            <MenuItem value="Finalizado">Finalizado</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="from-filtros" style={{ marginTop: '15px' }}>
        <TextField
          label="Párrafo 1"
          value={nuevoProyecto.descripcion[0]}
          onChange={(e) => handleDescripcion(0, e.target.value)}
          size="small"
        />
        <TextField
          label="Párrafo 2"
          value={nuevoProyecto.descripcion[1]}
          onChange={(e) => handleDescripcion(1, e.target.value)}
          size="small"
        />
      </div>

      <div className="from-filtros" style={{ marginTop: '15px' }}>
        {nuevoProyecto.recursos.map((recurso, index) => (
          <TextField
            key={index}
            label={`URL ${recurso.tipo}`}
            value={recurso.url}
            onChange={(e) => handleRecurso(index, e.target.value)}
            size="small"
          />
        ))}
      </div>

      <div style={{ marginTop: '15px' }}>
        {nuevoProyecto.equipo.map((miembro, index) => (
          <div key={index} className="from-filtros" style={{ marginBottom: '10px' }}>
            <TextField
              label="Nombre"
              value={miembro.nombre}
              onChange={(e) => handleEquipo(index, 'nombre', e.target.value)}
              size="small"
            />
            <TextField
              label="Rol"
              value={miembro.rol}
              onChange={(e) => handleEquipo(index, 'rol', e.target.value)}
              size="small"
            />
          </div>
        ))}
        <div className="from-filtros" style={{ marginTop: '15px' }}>
          <Button variant="outlined" color="primary" onClick={agregarMiembro}>
            + Agregar miembro
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Agregar Proyecto
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FormularioProyecto