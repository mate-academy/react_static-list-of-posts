import React from 'react';
import PropTypes from 'prop-types';

export function User({ name, email, address }) {
  return (
    <div className="post-info">
      <b>name:</b>
      {' '}
      {name}
      {' '}
      <br />
      <b>email:</b>
      {' '}
      {email}
      {' '}
      <br />
      <b>address: </b>
      {' '}
      {address.city}
      {' '}
      {address.street}
      <br />
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.arrayOf({
    city: PropTypes.string.isRequired,
  }).isRequired,
};
