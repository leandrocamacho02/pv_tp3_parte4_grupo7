#  Trabajo Práctico N°3 - Parte 4
## Integrantes del Grupo 7

- Camacho Leandro Abel Ezequiel - Github: [@leandrocamacho02](https://github.com/leandrocamacho02)
- Miranda Facundo David - Github: [@MirandaFD0](https://github.com/MirandaFD0)
- Porco Lucas Ricardo - Github: [@lucas777porco-ai](https://github.com/lucas777porco-ai)

## React Router + Material UI
# Descripción General

Este proyecto consiste en la evolución de una aplicación React hacia una *Single Page Application (SPA)* mediante la implementación de *React Router DOM* para la navegación dinámica entre vistas y la incorporación de *Material UI (MUI)* para mejorar la interfaz gráfica de usuario.
La aplicación permite gestionar proyectos, visualizar sus detalles, navegar entre diferentes secciones y mostrar información del usuario mediante una experiencia moderna y responsiva.

# Objetivos del Trabajo
## Implementar React Router

- Configurar el sistema de rutas.
- Navegación sin recargar la página.
- Rutas dinámicas mediante parámetros.
- Organización de vistas independientes.

## Incorporar Material UI

- Modernizar la interfaz.
- Utilizar componentes reutilizables.
- Mejorar la experiencia de usuario.
- Aplicar diseño responsive.

# Tecnologías Utilizadas

TECNOLOGIA| USO 
React | Desarrollo de la SPA 
React Router DOM | Navegación entre vistas 
Material UI | Componentes visuales 
JavaScript ES6+ | Lógica de la aplicación 
Vite | Entorno de desarrollo 

# Sistema de Rutas

La aplicación implementa las siguientes rutas:
RUTA | VISTA 
/ | Dashboard 
/dashboard | Dashboard 
/proyectos | ListaProyectos 
/proyectos/:id | DetalleProyecto 
/perfil | PerfilUsuario 

# Dashboard

La vista Dashboard funciona como pantalla principal de bienvenida.

## Características

- Mensaje de bienvenida.
- Descripción general del sistema.
- Tarjetas informativas.
- Métricas simuladas.

### Métricas mostradas

- Total de proyectos.
- Proyectos en curso.
- Proyectos finalizados.
- Usuarios registrados.

# Perfil de Usuario

La vista PerfilUsuario presenta información simulada del usuario.

## Datos mostrados

- Nombre completo.
- Rol.
- Institución.
- Correo electrónico.
Los datos se visualizan mediante componentes:
- Paper
- Typography
- List
- Divider

# Gestión de Proyectos
## Lista de Proyectos

Permite visualizar todos los proyectos disponibles mediante tarjetas.
Cada tarjeta incluye:
- Nombre del proyecto.
- Descripción.
- Estado.
- Botón "Ver Detalle".

## Detalle de Proyecto

Cada proyecto posee una vista independiente accesible mediante:
text
/proyectos/:id

### Implementación

Se utiliza el hook:
jsx
const { id } = useParams();
para capturar el identificador desde la URL y obtener los datos correspondientes.

### Beneficios

URLs compartibles
Persistencia al refrescar la página
Mejor experiencia de navegación
Separación de responsabilidades

# Componentes Material UI Utilizados
## Layout

- Container
- Box
- Grid

## Presentación

- Card
- CardContent
- Typography
- Paper

## Formularios

- TextField
- Select
- Button

## Retroalimentación

- Alert
- Snackbar

# Instalación

Clonar el repositorio:
bash
git clone <url-del-repositorio>
Instalar dependencias:
bash
npm install
Ejecutar el proyecto:
bash
npm run dev

# Funcionalidades Implementadas

- Navegación SPA.
- Menú mediante NavLink.
- Dashboard interactivo.
- Perfil de usuario.
- Lista de proyectos.
- Detalle dinámico de proyectos.
- Componentes Material UI.
- Diseño responsive.
- Alertas y notificaciones.
