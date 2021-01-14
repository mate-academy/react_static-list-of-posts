import React from 'react';
import './User.scss';
import { AuthorType } from '../../types';

export function User({ name, email, address }) {
  const { city, street, suite, zipcode } = address;

  return (
    <div className="user">
      <p>
        Author:
        {` ${name}`}
      </p>
      <p>
        email:
        {` ${email}`}
      </p>
      <p>
        adress:
        {` ${city}, ${street}, ${suite}, ${zipcode}`}
      </p>
    </div>
  );
}

User.propTypes = AuthorType.isRequired;
