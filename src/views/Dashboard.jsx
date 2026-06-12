const Dashboard = () => {
  return (
    <main>
      <h2>Bienvenido a EduProjects</h2>
      <p>Plataforma de Gestión de Proyectos Educativos</p>

      <div className="cards-container">
        <article className="card">
          <h3>Total de Proyectos</h3>
          <p className="card-numero">12</p>
          <p>Proyectos registrados en el sistema.</p>
        </article>

        <article className="card">
          <h3>Proyectos en Curso</h3>
          <p className="card-numero">5</p>
          <p>Proyectos activos este ciclo lectivo.</p>
        </article>

        <article className="card">
          <h3>Proyectos Finalizados</h3>
          <p className="card-numero">7</p>
          <p>Proyectos completados exitosamente.</p>
        </article>
      </div>
    </main>
  )
}

export default Dashboard