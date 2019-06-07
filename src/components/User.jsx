import React, { Component } from 'react';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, email } = this.props.info;
    return (
      <div className="user">
        <p><a href={`mailto:${email}`}>{name}</a></p>
      </div>
    );
  }
}
