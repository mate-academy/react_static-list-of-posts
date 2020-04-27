import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div className="user-info">
    <strong>User: </strong>
    <i className="user__name">{user.name}</i>
    <p>
      <strong>User-email: </strong>
      {user.email}
    </p>
    <address>
      <strong>User-address: </strong>
      {`${user.address.suite},
       ${user.address.street},
       ${user.address.city}`
      }
    </address>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      suite: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default User;
