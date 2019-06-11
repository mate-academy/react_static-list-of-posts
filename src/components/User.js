import React from 'react';

function User(props) {
  return (
    <div className="user-info">
      <p className="autor-name">{props.autor.name}</p>
      <p className="autor-email">Email: {props.autor.email}</p>
      <p className="autor-address">Address: city  {props.autor.address.city}, street: {props.autor.address.street}, suite: {props.autor.address.suite}.</p>
    </div>

  );
}

export default User;
