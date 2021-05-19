import React from 'react';
import PropTypes from 'prop-types';

export function User({ name, email, address }) {
  return (
    <div className="post-info">
      <b>{`name: ${name}`}</b>
      <br />
      <b>{`email: ${email}`}</b>
      <br />
      <b>{`address: ${address.city}, ${address.street}`}</b>
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
