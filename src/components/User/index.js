import React from 'react';
import { userShape } from './userShape';
import './User.css';

function User({ address, name, email }) {
  const userAdress = address.suite
    .concat(` `, address.street, `, `, address.city);

  return (
    <div className="user">
      <h4>{name}</h4>
      <span>{email}</span>
      <div>
        <p>{userAdress}</p>
      </div>
    </div>
  );
}

User.propTypes = userShape;

export default User;
