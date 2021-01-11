import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <>
    <span className="user_name">{name}</span>
    {' '}
    <br />
    Email:
    {' '}
    <span className="user_email">{email}</span>
    {' '}
    <br />
    City:
    {' '}
    <span className="user_city">{address.city}</span>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.object.isRequired,
    ]),
  ).isRequired,
};
