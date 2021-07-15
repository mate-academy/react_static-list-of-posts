import React from 'react';
import { userTypes } from '../../types';

export const User = ({ user }) => (
  <>
    <div>
      <span>
        {'User Name: '}
        {user.name}
      </span>
    </div>
    <div>
      <span>
        {'Email: '}
        {user.email}
      </span>
    </div>
    <div>
      <span>
        {'Address: '}
        {user.address.city}
        {', '}
        {user.address.street}
        {', '}
        {user.address.suite}
      </span>
    </div>
  </>
);

User.defaultProps = {
  user: '',
};

User.propTypes = {
  user: userTypes,
};
