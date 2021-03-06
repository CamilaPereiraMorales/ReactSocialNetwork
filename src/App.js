import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Registro from './components/registro/Registro';
import VistaMuro from './components/Muro/VistaMuro';
import Perfil from '../src/components/Perfil/Perfil';
import UsuarioAutenticado from './components/Login/Autentificacion';
import Buscador from './components/buscadorClinicas/Buscador';


class App extends Component {
  render() {
    return (
        // <VistaMuro/>
        <Router basename={process.env.PUBLIC_URL + '/'}>
          <div>
          <Route exact path="/" component={UsuarioAutenticado}/>
          <Route path="/registro" component={Registro}/>
          <Route path="/perfil" component={Perfil}/>
          <Route path="/buscador" component={Buscador}/>
          <Route path="/muro" component={VistaMuro}/>
          </div>
        </Router>
    
    );
  }
}

export default App;