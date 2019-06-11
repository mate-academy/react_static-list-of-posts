import React from 'react';
import './User.css';

function User(props) {
  return (
    <div>
      <span className="user-name">{props.name}</span>
      <span className="user-email">{props.email}</span>
      <span className="user-info">{props.address.suite} {props.address.street} {props.address.city} {props.address.zipcode}</span>
    </div>
  );
}

export default User;
