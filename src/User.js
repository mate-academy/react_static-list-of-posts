import React from 'react';
import { AuthorType } from './types';

export const User = ({ name, email, address }) => (
  <div>
    <p><strong>{`Author: ${name}`}</strong></p>
    <p><em>{`email: ${email}`}</em></p>
    <p>
      <em>{`Address: ${address.city}, ${address.street}`}</em>
    </p>
    <hr />
  </div>
);

User.propTypes = AuthorType.isRequired;
