import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <>
    <h3 className="user__name">{name}</h3>
    <a className="user__email" href={`mailto:${email}`}>
      {email}
    </a>
    <a
      className="user__address"
      href={
        `http://www.google.com/maps/place/${address.geo.lng},${address.geo.lat
        }`}
    >
      city:
      {address.city}
      {` `}
      street:
      {`${address.street} ${address.suite}`}
      {` `}
      zip-code:
      {address.zipcode}
    </a>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
