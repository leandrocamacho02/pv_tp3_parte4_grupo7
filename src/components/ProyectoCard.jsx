import { Card, CardContent, Typography, Button, Chip, Box } from '@mui/material'
import { Link } from 'react-router-dom'

const ProyectoCard = ({ proyecto, onEliminar }) => {
  const { id, titulo, categoria, estado } = proyecto

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {titulo}
        </Typography>
        <Typography variant="body2" gutterBottom>
          <strong>Categoría:</strong> {categoria}
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Chip
            label={estado}
            color={estado === 'Finalizado' ? 'success' : 'warning'}
            size="small"
          />
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => onEliminar(id)}
          >
            Eliminar
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            component={Link}
            to={`/proyectos/${id}`}
          >
            Ver detalle
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProyectoCard