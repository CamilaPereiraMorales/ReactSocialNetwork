import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';

class SecondScreen extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0
    }
  }

  render() {
    return (
      <div>
        <a onClick={this.contadorLikes.bind(this)}><Icon left>favorite</Icon>Me gusta {this.state.contador} </a>
      </div>
    )
  }
  contadorLikes() {
    this.setState({
      contador: this.state.contador + 1
    })
  }
}

export default SecondScreen;