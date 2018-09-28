import React, { Component } from 'react';
import './vistaMuro.css';
import Navbar from '../Common/Navbar';
import Comentario from './Comentario';
import './vistaMuro.css';




class VistaMuro extends Component {
 
  render() {
    return (
      <div className = "fondoMuro">
        <div>
          <Navbar/>
        </div>""
        <div className = "comentario">
          <Comentario/>
        </div>
      </div>
    )
  }
}

export default VistaMuro;