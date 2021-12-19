import { Link } from 'react-router-dom';


function Login() {
  return (
    <div>
      <h1>Hi!note</h1>

      <form>
        <input placeholder='Ingresa correo' /><br/>
        <input placeholder='Ingresa contraseña' /><br/>
        <Link to="/home" className="Login"><button>Entrar</button></Link>
      </form>

      <section>
        <h2 className='registro'>¿Aún no tienes una cuenta?<br/>
         Registrate <Link to="/register" className="register">aquí</Link></h2>
        <hr/>
        <h2>Iniciar sesión con Google</h2>
      </section>
    </div>)

}

export default Login