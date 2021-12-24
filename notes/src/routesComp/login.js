import { Link } from 'react-router-dom';
import '../App.css';

function Login() {
  return (
    <div>
      <h1 className='hiNote'>Hi!note</h1>
      <div className='blueContainer'>
        <form div className='loginform'>
          <input className="loginInput" placeholder='Ingresa correo' /><br />
          <input className="loginInput" placeholder='Ingresa contraseña' /><br />
          <Link to="/home" className="Login"><button className='send'>Entrar</button></Link>
        </form>
        <hr className='lineaDeSeccion'/>
        <button className='google'>Iniciar sesión con Google</button>
      </div>
      <section>
        <h2 className='registro'>¿Aún no tienes una cuenta?<br />
          Registrate <Link to="/register" className="register">aquí</Link></h2>
       

      </section>

    </div>)

}

export default Login