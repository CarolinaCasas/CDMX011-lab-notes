import { Link } from 'react-router-dom';
import blackcat from '../img/blackcat.png';
import '../App.css';
function Register() {
  return (
    <div>
      <h1 className='hiNote'>Hi!note</h1>
      <div className='blueContainer'>
      <form>
        <input className="loginInput" placeholder='Ingresa correo' /><br/>
        <input className="loginInput" placeholder='Crea contraseña' /><br/>
        <input className="loginInput" placeholder='Confirma contraseña' /><br/>
        <Link to="/home" className="home"><button className='send'>Registrarse</button></Link>
        <hr className='lineaDeSeccion'/>
        <button className='google'>Iniciar sesión con Google</button>
      </form>
      </div>
      <img src={blackcat} className="frontCatImg" alt="frontCatImg" />
        <h2 className='registro'>¿Ya tienes una cuenta?<br/>
        Inicia sesión <Link to="/" className="Login">Aquí</Link></h2>
    </div>
  )
}

export default Register