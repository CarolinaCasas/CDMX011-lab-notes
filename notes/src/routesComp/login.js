import { Link } from 'react-router-dom';
import blackcat from '../img/blackcat.png';
import googleLogo from '../img/googleLogo.png';
import '../App.css';

function Login() {
  return (
    <div className='loginSection'>
      <h1 className='hiNote'>Hi!note</h1>
      <div className='blueContainer'>
        <form div className='loginform'>
          <input className="loginInput" placeholder='Ingresa correo' /><br />
          <input className="loginInput" placeholder='Ingresa contraseña' /><br />
          <Link to="/home" className="Login"><button className='send'>Entrar</button></Link>
        </form>
        <hr className='lineaDeSeccion'/>
        <button className='google'><img src={googleLogo} className="googleLogo" alt="googleLogo" />Iniciar sesión con Google</button>
      </div>
      <img src={blackcat} className="frontCatImg" alt="frontCatImg" />
        <h2 className='registro'>¿Aún no tienes una cuenta?<br />
          Registrate <Link to="/register" className="register">Aquí</Link></h2>
          
    </div>)

}

export default Login