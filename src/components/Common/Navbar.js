import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import firebase from '../../firebase/firebase';


class NavbarC extends Component {
 constructor() {
   super();

 }

 logoutWithFirebase() {
  firebase.auth().signOut()
    .then(()=>{
      // console.log("Usuario finalizó su sesión");
    })
    .catch((error)=>{
      console.log("Error de firebase > Código > "+error.code); 
      console.log("Error de firebase > Mensaje > "+error.message); 
    });
}
  render() {
    return (
      <div>
        <Navbar brand='Little Pet Society' right>
          {/* <NavItem onClick={() => console.log('test click')}>Getting started</NavItem*/}
          <NavItem divider />
          <NavItem href={process.env.PUBLIC_URL + '/Perfil'}><Icon>perm_identity</Icon></NavItem>
          <NavItem href={process.env.PUBLIC_URL + '/buscador'}><Icon>help_outline</Icon></NavItem>
          <NavItem href={process.env.PUBLIC_URL + '/muro'}><Icon>chrome_reader_mode</Icon></NavItem>
          <NavItem href={process.env.PUBLIC_URL + '/muro'}><Icon>chat</Icon></NavItem>
          <NavItem onClick = {this.logoutWithFirebase.bind(this)} ><Icon>close</Icon></NavItem>
        </Navbar>
      </div>
    )
  }
}

export default NavbarC;

