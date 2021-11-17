import {
    BrowserRouter as Router,
    Switch,
    Route,
    //Link,
    //BrowserRouter
} from "react-router-dom";
//import React from 'react';
import './App.css';
import Home from './routesComp/home'
import Login from './routesComp/login'
import Register from './routesComp/register'

//https://johnserrano.co/blog/aprende-a-crear-rutas-con-react-router

function App() {
    return (
        <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>

                    <Route path="/Register" exact>
                        <Register />
                    </Route>

                    <Route path="/Login" exact>
                        <Login />
                    </Route>

                </Switch>
        </Router>
    );
}

export default App;