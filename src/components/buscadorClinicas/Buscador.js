import React, { Component } from 'react';
import Navbar from '../Common/Navbar';
import Carrusel from '../Common/Carrusel';
import Informacion from './Informacion';
import './buscador.css';

class VistaBuscador extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {/* <Carrusel/> */}
        <h4>Buscador De Clinicas</h4>
        <Informacion />
      </div>
    )
  }

}

export default VistaBuscador;