import React from 'react';
import { TypeUser } from '../../types';
import './User.scss';

export const User = ({ user }) => (
  <div>
    <span>
      <strong>{user.name}</strong>
      {' '}
      -
      {' '}
    </span>
    <span>{user.email}</span>
    <div className="post-tile__details">
      <p>Address:</p>
      <ul>
        {Object.values(user.address)
          .map(el => ((typeof el === 'object')
            ? (
              <li key={Math.random()}>
                Location: lat[
                {Object.values(el).join('] | lng[')}
                ]
              </li>
            )
            : <li key={Math.random()}>{el}</li>))}
      </ul>
    </div>
  </div>
);

User.propTypes = TypeUser.isRequired;
