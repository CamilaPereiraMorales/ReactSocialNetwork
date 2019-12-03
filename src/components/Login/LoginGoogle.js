import React, { Component } from 'react';
import firebase from 'firebase';
import {Button, Row, Col} from 'react-materialize';


class LoginGoogle extends Component {
    handleAuth () {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then( result => {
            console.log('usuario Registrado' + result); 
        }) 
        .catch(error => {
            console.log(error);
        })
}

render() {
	return (
		<Row>
			<Col s = {12}>
				<div>
					<Button className="buttonStyle" onClick= {this.handleAuth.bind(this)}>LOGIN CON GOOGLE</Button>
				</div>
			</Col>
		</Row>
		)
	}
}
 

export default LoginGoogle;