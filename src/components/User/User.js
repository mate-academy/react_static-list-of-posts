import React from 'react';
import propTypes from 'prop-types';

import './User.css';

const User = ({ user }) => (
  <div className="user-info">
    <p><strong>{user.name}</strong></p>
    <a href={`mailto:${user.email}`}>{user.email}</a>
    <p>
      <span>
        <strong>city:</strong>
        {` ${user.address.city}; `}
      </span>
      <span>
        <strong>street:</strong>
        {` ${user.address.street}; `}
      </span>
      <span>
        <strong>suite:</strong>
        {` ${user.address.suite}; `}
      </span>
      <span>
        <strong>zip-code:</strong>
        {` ${user.address.zipcode}.`}
      </span>
    </p>
  </div>
);

export default User;

User.propTypes = {
  user: propTypes.arrayOf(propTypes.string),
};
