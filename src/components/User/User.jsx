import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <>
    <span>{`Name: ${name}`}</span>
    <br />
    <span>{`Email: ${email}`}</span>
    <br />
    <span>Address: </span>
    {`${address.city} ${address.street}`}
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
  }).isRequired,
};
