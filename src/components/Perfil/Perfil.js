import React, {Component} from 'react';
import Carrusel from '../Common/Carrusel';
import Text from '../Perfil/Text';
import Username from '../Perfil/Username';
import Navbar from '../Common/Navbar';
class Perfil extends Component{
	constructor(){
			super();
	}
	render(){
		return(
			<div>
				<Navbar/>
				{/* <Carrusel /> */}
				<Text />
				<Username />
			</div>
		)
	}
};

export default Perfil;
