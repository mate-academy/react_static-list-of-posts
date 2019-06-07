import React, {Component} from 'react';
import {users} from '../users';

class User extends Component {
  constructor(props) {
    super(props);
    this.user = users.find(user => user.id === this.props.id);
  }

  render() {

      return (
        <div>
          <h3>{this.user.name}</h3>
          <h3>{this.user.email}</h3>
          <h6>{this.user.address.suite} {this.user.address.street} {this.user.address.city} {this.user.address.zipcode}</h6>
        </div>
      );
  }
}

export default User;
