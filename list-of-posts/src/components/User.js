import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return (
      <div className="author-email">
        <span> - <strong>{this.props.users.name}</strong></span>
        <span> {this.props.users.email}</span>
      </div>
    )
  }

}
