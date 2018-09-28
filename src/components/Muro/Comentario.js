import React, { Component } from 'react'; 
import './vistaMuro.css';
import { Row, Col, Button } from 'react-materialize';
import Post from './Post';


class Comentario extends Component {
  constructor(props) {

    super(props);
    this.state = { 
      items: [],
      text: '' 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div>
        <Row>
          <div Col s={12}>
            <Post items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
              <textarea onChange = {this.handleChange} value = {this.state.text} ></textarea>
              <Button floating large className='red' waves='light' icon='add'>{this.state.items.length + 1}</Button>
            </form>
          </div>
        </Row>
      </div>
    )
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
};

export default Comentario;