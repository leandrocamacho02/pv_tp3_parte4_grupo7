import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material'
import App from './App.jsx'
import './css/styles.css'

const tema = createTheme({
  palette: {
    primary: {
      main: '#2980b9',
    },
    error: {
      main: '#e74c3c',
    },
    success: {
      main: '#27ae60',
    },
    warning: {
      main: '#f39c12',
    }
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
          textTransform: 'none',
          fontWeight: 'bold',
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 6px 18px rgba(26,43,74,0.1)',
          background: 'linear-gradient(160deg, #ffffff, #f0f6ff)',
          borderTop: '5px solid #2980b9',
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          borderRadius: '20px',
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '25px',
          }
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          borderRadius: '25px',
        }
      }
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={tema}>
      <App />
    </ThemeProvider>
  </StrictMode>
)