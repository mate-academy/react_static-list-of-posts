import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <p className="user">
    <span className="name">{name}</span>
    <span>
      {' '}
      from
      {address.city}
    </span>
    <br />
    <a href="mailto:" className="mail">{email}</a>
  </p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
