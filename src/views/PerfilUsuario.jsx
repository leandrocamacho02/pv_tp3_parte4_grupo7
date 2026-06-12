const PerfilUsuario = () => {
  return (
    <main>
      <h2>Perfil de Usuario</h2>
      <section className="perfil-container">
        <div className="perfil-info">
          <div className="perfil-header">
            <div className="perfil-datos">
              <h3>Carlos Mendoza</h3>
              <span className="perfil-rol">Docente</span>
            </div>
          </div>
          <dl className="perfil-lista">
            <dt>Especialidad</dt>
            <dd>Desarrollo de Software</dd>
            <dt>Institución</dt>
            <dd>Facultad de Ingeniería – UNJu</dd>
            <dt>Correo</dt>
            <dd>c.mendoza@fi.unju.edu.ar</dd>
          </dl>
        </div>
      </section>
    </main>
  )
}

export default PerfilUsuario