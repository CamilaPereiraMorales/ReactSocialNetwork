import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from 'firebase';
import Titulo from '../registro/Titulo';
import Registro from '../registro/Registro';
import SignInForm from './SignInForm';
import './Login.css';


const Login = () =>{

	return (

		<Router basename={process.env.PUBLIC_URL + '/'}>
			<div className = "fondoLogin">
			<div className = "containerLogin">
				<Titulo titulo="Little Pet Society" />
				<SignInForm />
				<a href={process.env.PUBLIC_URL + '/registro'}>Registrate con Nosotros</a>
				<Route path="/registro" component={Registro}></Route>   
				</div>
			</div>
		</Router>
	)
}

export default Login;