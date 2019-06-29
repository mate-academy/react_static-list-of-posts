import React from "react";
import '../App.css';

function User(props) {
  return (
    <div>
      <div className="user-name">{props.name}</div>
      <div className="user-email">{props.email}</div>
      <div className="user-address">{props.city}, {props.street}, {props.suite}</div>
    </div>
  )
}

export default User;