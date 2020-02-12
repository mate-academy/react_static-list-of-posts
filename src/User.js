import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <>
    <p>{`👳${user.name}`}</p>
    <p>{`🏠 ${user.address.city}`}</p>
    <a href={user.email}>{`📧 ${user.email}`}</a>
  </>
);

User.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default User;
