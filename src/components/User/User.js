import React from 'react';
import './User.css';
import { UserShape } from '../../shapes';

export const User = ({ name, email, address }) => (
  <div className="App__user">
    <p>
      <strong>
        Author
      </strong>
      {' : '}
      {name}
      {', '}
      <strong>
        Email
      </strong>
      {' : '}
      {email}
      {', '}
      <strong>
        Address
      </strong>
      {' : '}
      {address}
    </p>
  </div>
);

User.propTypes = UserShape;
