import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <h3 className="user__name">
      {name}
    </h3>
    <p className="user__email">
      {email}
    </p>
    <div className="user__address">
      <p>
        {address.city}
      </p>
      <p>
        {address.street}
      </p>
      <p>
        {address.suite}
      </p>
      <p>
        {address.zipcode}
      </p>
    </div>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
