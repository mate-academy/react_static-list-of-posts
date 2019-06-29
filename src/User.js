import React from 'react';

function User(props) {
  return (
    <div className="author">
      <span>Name: </span> {props.authorData.name}, 
      <span> e-mail: </span> {props.authorData.email}, 
      <span> Address: </span> {props.authorData.address.street}, 
      {props.authorData.address.suite},
      {props.authorData.address.city}
    </div>
  );
}

export default User;