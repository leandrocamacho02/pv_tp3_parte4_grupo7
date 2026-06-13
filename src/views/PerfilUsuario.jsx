import { Paper, Typography, Box, Chip, Divider } from '@mui/material'

const PerfilUsuario = () => {
  return (
    <main>
      <h2>Perfil de Usuario</h2>
      <Paper elevation={3} sx={{ borderRadius: '16px', overflow: 'hidden', maxWidth: 600, margin: '0 auto' }}>

        <Box sx={{ background: 'linear-gradient(135deg, #1a2b4a, #2980b9)', padding: '25px 30px', color: 'white' }}>
          <Typography variant="h5" fontWeight="bold">Carlos Mendoza</Typography>
          <Chip
            label="Docente"
            sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 'bold', mt: 1 }}
          />
        </Box>

        <Box sx={{ padding: '25px 30px' }}>
          <Typography variant="h6" fontWeight="bold" color="#1a2b4a" mb={1}>
            Información Personal
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <dl className="perfil-lista">
            <dt>Especialidad</dt>
            <dd>Desarrollo de Software</dd>
            <dt>Institución</dt>
            <dd>Facultad de Ingeniería – UNJu</dd>
            <dt>Correo</dt>
            <dd>c.mendoza@fi.unju.edu.ar</dd>
          </dl>
        </Box>

      </Paper>
    </main>
  )
}

export default PerfilUsuario