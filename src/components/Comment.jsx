import React, { Component } from 'react';

export default class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, name, body } = this.props.item;
    return (
      <div key={id} className="comment">
        <h5>{name}</h5>
        <p>{body}</p>
      </div>
    );
  }
}
