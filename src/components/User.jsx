/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

import { UserAddress } from './UserAddress';

export const User = ({ post, newUsers }) => (
  <>
    {newUsers.map((user) => {
      if (user.id === post.userId) {
        return (
          <div>
            <p>Author: <span className="author">{user.name}</span></p>
            <p>Email: {user.email}</p>
            <p>Address:
              <UserAddress addressObject={user.address} />
            </p>
          </div>
        );
      }

      return null;
    })}
  </>
);

User.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.number.isRequired,
  }).isRequired,
  newUsers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
};
