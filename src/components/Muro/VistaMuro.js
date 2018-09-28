import React, { Component } from 'react';
import './vistaMuro.css';
import Navbar from '../Common/Navbar';
import Comentario from './Comentario';
import Carrusel from '../Common/Carrusel';
import './vistaMuro.css';




class VistaMuro extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div className = "fondoMuro">
        <div>
          <Navbar/>
          {/* <Carrusel/> */}
        </div>""
        <div className = "comentario">
          <Comentario/>
        </div>
      </div>
    )
  }
}

export default VistaMuro;