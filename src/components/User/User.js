import React from 'react';
import './User.css';
import { UserShape } from './UserShape';

export const User = ({ name, email, address }) => (
  <div className="App__user">
    <p>
      {`Author: ${name} | Email: ${email}, | Address: ${address}`}
    </p>
  </div>
);

User.propTypes = UserShape;
