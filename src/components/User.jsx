import React, { Component } from 'react';

export default class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name } = this.props.info;
    return (
      <div className="user">
        <p>{name}</p>
      </div>
    );
  }
}
