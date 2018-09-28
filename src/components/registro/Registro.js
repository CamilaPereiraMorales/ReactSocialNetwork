import React, {Component} from 'react';
import Titulo from './Titulo';
import style from './style.css';
import Text from './Text';
import Formulario from './Formulario';

class Registro extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className = "fondoLogin ">
        <div className = "contenedor">
          <div className = 'title'>
            <Titulo  titulo= "Little Pet Society"/>
            <Text texto = "Registrate en nuestra comunidad"/>
          </div>
        <div className = "formulario">
          <Formulario/>
        </div>
      </div>
  </div>
    )
  }
}


export default Registro;