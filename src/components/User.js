import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <div>
      <h2>
        Name:
        {user.name}
      </h2>
      <p>
        Email:
        {user.email}
      </p>
      <p>
        City:
        {user.address.city}
      </p>
    </div>
  );
}
User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default User;
