import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <span className="user__name">{name}</span>
    <a className="user__email" href={`mailto:${email}`}>{email}</a>
    <a className="user__address" href="google.com">
      {`${address.city}, ${address.zipcode}`}
    </a>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
