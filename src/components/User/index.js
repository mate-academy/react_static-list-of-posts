import React from 'react';
import { userShape } from './userShape';
import './User.css';

function User({ user }) {
  const userAdress = user.address.suite
    .concat(` `, user.address.street, `, `, user.address.city);

  return (
    <div className="user">
      <h4>{user.name}</h4>
      <span>{user.email}</span>
      <div>
        <p>{userAdress}</p>
      </div>
    </div>
  );
}

User.propTypes = userShape;

export default User;
