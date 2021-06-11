/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

export const UserAddress = ({ addressObject }) => (
  <span>
    {addressObject.street},{' '}
    {addressObject.suite},{' '}
    {addressObject.city}
  </span>
);

UserAddress.propTypes = {
  addressObject: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};
