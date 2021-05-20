import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div className="user">
    <p>{name}</p>
    <p>{email}</p>
    <p>{`${address.city}, ${address.street}, ${address.suite}`}</p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};

User.defaultProps = {
  email: '',
};
