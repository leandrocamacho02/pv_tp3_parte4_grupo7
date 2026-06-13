import { Container, Typography, Grid, Card, CardContent } from '@mui/material'

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Bienvenido a EduProjects
      </Typography>
      <Typography variant="subtitle1" textAlign="center" color="text.secondary" mb={4}>
        Plataforma de Gestión de Proyectos Educativos
      </Typography>

      <Grid container spacing={3}>

        <Grid item xs={12} sm={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Total de Proyectos</Typography>
              <Typography variant="h3" color="primary" my={1}>12</Typography>
              <Typography variant="body2" color="text.secondary">Proyectos registrados en el sistema.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Proyectos en Curso</Typography>
              <Typography variant="h3" color="primary" my={1}>5</Typography>
              <Typography variant="body2" color="text.secondary">Proyectos activos este ciclo lectivo.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Proyectos Finalizados</Typography>
              <Typography variant="h3" color="primary" my={1}>7</Typography>
              <Typography variant="body2" color="text.secondary">Proyectos completados exitosamente.</Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  )
}

export default Dashboard