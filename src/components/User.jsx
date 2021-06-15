import React from 'react';
import PropTypes from 'prop-types';

import { UserAddress } from './UserAddress';

export const User = ({ user }) => (
  <>
    <div>
      <p>
        Author:
        <span className="author">
          {user.name}
        </span>
      </p>
      <p>
        Email:
        {user.email}
      </p>
      <p>
        Address:
        <UserAddress addressObject={user.address} />
      </p>
    </div>
  </>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired,
  }).isRequired,
};
