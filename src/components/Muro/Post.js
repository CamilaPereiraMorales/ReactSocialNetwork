import React, { Component } from 'react';
import Likes from './Likes';
import { Row, Col, Button } from 'react-materialize';
import './post.css';


class Post extends Component {
  render() {
    return (
      <div>
        {this.props.items.map(item => (
          <Row>
            <div className = "post" Col s = {12}>
              <h6 key={item.id}>{item.text}</h6>
            <div>
              < Likes/>
            </div>

          </div>
        </Row>
        ))}
      </div>
    );
  }
}

export default Post;