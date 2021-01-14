import React from 'react';
import PropTypes from 'prop-types';
import { UserTypes } from '../../types';

export const User = ({ user }) => (
  <div className="post__user-info">
    <div className="post__user-name">
      {user.name}
    </div>

    <div className="post__user-email">
      {user.email}
    </div>

    <div className="post__user-address">
      {
        Object.keys(user.address).map(addr => (
          <div key={user.address[addr]} className="posts__addr">
            {
              addr === 'geo'
                ? null
                : user.address[addr]
            }
          </div>
        ))
      }
    </div>
  </div>
);

User.propTypes = {
  user: PropTypes.shape(UserTypes).isRequired,
};
