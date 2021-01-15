import React from 'react';
import { UserType } from '../types';

export const User = ({ name, email, address }) => (
  <div>
    <p>
      Author:
      <strong>
        {' '}
        {name}
      </strong>
    </p>
    <p>
      Adress:
      {
        ` ${address.zipcode} ${
          address.city}, ${
          address.street}, ${
          address.suite}`}
    </p>
    <p>
      Email:
      <span className="App__email">
        {' '}
        {email}
      </span>
    </p>
  </div>
);

User.propTypes = UserType;
