import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <div>
      user name:
      {user.name}
      {' '}
      email:
      {user.email}
      {' '}
      address:
      {user.address.street}
      ,
      {user.address.suite}
      ,
      {user.address.city}
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.object,
  }).isRequired,
};

export default User;
