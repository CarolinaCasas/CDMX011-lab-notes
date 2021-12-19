import { Link } from 'react-router-dom';

function Register() {
  return (
    <div>
      <h1>Hi!note</h1>

      <form>
        <input placeholder='Ingresa correo' /><br/>
        <input placeholder='Crea contraseña' /><br/>
        <input placeholder='Confirma contraseña' /><br/>
        <Link to="/home" className="home"><button>Registrarse</button></Link>
      </form>
      <section>
        <h2>¿Ya tienes una cuenta?<br/>
        Inicia sesión <Link to="/" className="Login">aquí</Link></h2>
        <hr/>
        <h2>Iniciar sesión con Google</h2>
      </section>
    </div>
  )
}

export default Register