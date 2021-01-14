import React from 'react';
import './User.scss';
import { AuthorType } from '../../types';

export function User({ name, email, id }) {
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
        id:
        {` ${id}`}
      </p>
    </div>
  );
}

User.propTypes = AuthorType.isRequired;
