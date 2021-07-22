import React from 'react';
import { userPropTypes } from '../../types';

export const User = ({ user }) => (
  <ul>
    <li key={user.id}>
      {`name of person is: `}
      <strong>
        {user.name}
      </strong>
      <p>
        {`user email: `}
        <strong>
          {user.email}
        </strong>
        <p>
          {`address of user is: `}
          <strong>
            {user.address.city}
            {' '}
            {user.address.street}
            {' '}
            {user.address.suite}
          </strong>
        </p>
      </p>
    </li>
  </ul>
);
User.defaultProps = {
  user: '',
};

User.propTypes = {
  user: userPropTypes,
};
