import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div className="user">
    <ul>
      <li>
Author:
        {user.name}
      </li>
      <li>
Email:
        {user.email}
      </li>
      <li>
Address:
        {user.address.city}
      </li>
    </ul>
  </div>
);

User.propTypes = { user: PropTypes.arrayOf(PropTypes.object).isRequired };

export default User;
