import React, { Component } from 'react';

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { id, email, name, body } = this.props.item;
    return (
      <div key={id} className="comment">
        <h5><a href={`mailto:${email}`}>{name}</a></h5>
        <p>{body}</p>
      </div>
    );
  }
}
