import React from 'react';
import { TypeOfUsers } from '../types';

export const User = ({ name, email, address }) => (
  <div>
    <p>
      Author:
      <strong> {name}</strong>
    </p>
    <p>
      Adress:
      {
        ` ${address.zipcode} ${
          address.city}, ${
          address.street}, ${
          address.suite}`}
    </p>
    <p style={{ color: 'blue' }}>
      Email: {email}
    </p>
  </div>
);

User.propTypes = TypeOfUsers;
