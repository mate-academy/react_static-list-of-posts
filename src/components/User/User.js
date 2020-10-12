import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export function User({ name, email, address }) {
  return (
    <div className="border_style_double">
      <div>{name}</div>
      <div>{email}</div>
      <address className="author-address">
        {`${address.street}, ${address.suite}, 
        ${address.city}, ${address.zipcode}`}
      </address>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
