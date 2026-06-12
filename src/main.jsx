import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* CssBaseline resetea los estilos para que Material UI se vea perfecto */}
      <CssBaseline />
      <App />
    </BrowserRouter>
  </StrictMode>,
)