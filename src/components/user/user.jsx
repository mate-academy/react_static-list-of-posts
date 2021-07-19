import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div className="user">
    <p className="user__name">{`User name: ${name}`}</p>
    <p className="user__email">{`User email: ${email}`}</p>
    <p className="user__address">
      {`User address: ${`${address.street}, ${address.suite}`}`}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
    geo: PropTypes.shape({
      lat: PropTypes.string,
      lng: PropTypes.string,
    }),
  }).isRequired,
};
