import React from 'react'
import { Link } from 'react-router-dom';

function Register(){
return(
    <div>
        <h1>Register</h1>
        <Link to="/home" className="Login"><button>Registrarse</button></Link>
       

        <h2>¿Ya tienes una cuenta?</h2>
            <h2>Inicia sesión</h2>
            <Link to="/" className="Login">aquí</Link>
    </div>
)
}

export default Register