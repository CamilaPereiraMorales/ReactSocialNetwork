import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Titulo from '../registro/Titulo';
import Registro from '../registro/Registro';
import SignInForm from './SignInForm';
import './Login.css';


const Login = () =>{

	return (

		<Router basename={process.env.PUBLIC_URL + '/'}>
			<div className = "containerBackground">
			<div className = "containerLogin">
				<Titulo titulo="Little Pet Society" />
				<SignInForm />
				<p className="registrationLink">Aún no tienes una cuenta? Registrate con Nosotros <a  href={process.env.PUBLIC_URL + '/registro'}>aqui</a></p>
				
				<Route path="/registro" component={Registro}></Route>   
				</div>
			</div>
		</Router>
	)
}

export default Login;