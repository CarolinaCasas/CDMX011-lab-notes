import React from 'react'
import { Link } from 'react-router-dom';


function Login(){
return(
    <div>
        <h1>Login</h1>

        <section>
        <Link to="/home" className="Login"><button>Entrar</button></Link> 
            
    
        </section>
        <section>
            <h2>¿Aún no tienes una cuenta?</h2>
            <h2>Registrate</h2>
            <Link to="/register" className="register">aquí</Link>
        </section>
    </div>)
   
}

export default Login