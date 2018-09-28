import React, {Component} from 'react';
import firebase from 'firebase';
import Perfil from '../Perfil/Perfil';
import Login from '../Login/Login';

class UsuarioAutenticado extends Component{
  constructor(props) {
    super(props);

    this.state = ({
      user : {},
    });

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener(){
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({user});

      } else {
        this.setState({user: null});
      }
    });
  }

  render() {

    return (
      <div>
      {this.state.user ? ( <Perfil/>) : (<Login/>)} </div>
    )
  }
 } 


export default UsuarioAutenticado;
