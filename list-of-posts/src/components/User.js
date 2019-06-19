import React from 'react';

function User(props) {
  return (
    <div>
      <p>name: {props.name}</p>
      <p>email:<a href={"mailto:" + props.email}>{props.email}</a></p>
      <p>address: {props.address.street}, {props.address.city}, {props.address.suite}</p>
    </div>
  );
}

export default User;
