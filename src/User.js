import React from 'react';

function User(props) {
  return (
    <div className="author">
      <span className="itemTitle">Name: </span>
      <span> {props.authorData.name}, </span>
      <span className="itemTitle"> e-mail: </span> 
      <span>{props.authorData.email}, </span>
      <span className="itemTitle"> Address: </span> 
      <span>{props.authorData.address.street}, </span>
      <span>{props.authorData.address.suite}, </span>
      <span>{props.authorData.address.city}</span>
    </div>
  );
}

export default User;