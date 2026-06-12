import { Box, Paper, Typography, Avatar, Divider, List, ListItem, ListItemText } from '@mui/material'

const PerfilUsuario = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 500, textAlign: 'center' }}>
        <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>
          LR
        </Avatar>
        
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Perfil de Usuario
        </Typography>
        
        <Divider sx={{ my: 2 }} />
        
        <List>
          <ListItem disablePadding sx={{ py: 1 }}>
            <ListItemText 
              primary="Nombre" 
              secondary="Lucas Rodríguez" 
              primaryTypographyProps={{ fontWeight: 'bold' }}
            />
          </ListItem>
          <ListItem disablePadding sx={{ py: 1 }}>
            <ListItemText 
              primary="Rol" 
              secondary="Estudiante - Analista Programador Universitario" 
              primaryTypographyProps={{ fontWeight: 'bold' }}
            />
          </ListItem>
          <ListItem disablePadding sx={{ py: 1 }}>
            <ListItemText 
              primary="Institución" 
              secondary="Facultad de Ingeniería - Universidad Nacional de Jujuy" 
              primaryTypographyProps={{ fontWeight: 'bold' }}
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
  )
}

export default PerfilUsuario