import React, { Component } from 'react';
import firebase from 'firebase';
import {Button, Row, Col} from 'react-materialize';


class Logout extends Component {
  handleLogOut () {
    firebase.auth().signOut()
      .then(()=>{
        console.log("Usuario finalizó su sesión");
      })
      .catch((error)=>{
        console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
        console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
      });
}

render() {
	return (
		<Row>
			<Col s = {12}>
				<div>
					<Button onClick= {this.handleLogOut.bind(this)}>Salir</Button>
				</div>
			</Col>
		</Row>
		)
	}
}
 

export default Logout;

