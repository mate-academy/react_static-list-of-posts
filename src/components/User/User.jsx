import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <>
    <p className="post__userName">{name}</p>
    <p className="post__userEmail">{email}</p>
    <div className="post__userAddress">
      Address:
      <p>
        City:
        {address.city}
      </p>
      <p>
        Street:
        {address.street}
      </p>
      <p>
        Zipcode:
        {address.zipcode}
      </p>
      <p>
        Geolocation:
        <br />
        <span>{address.geo.lat}</span>
        <br />
        <span>{address.geo.lng}</span>
      </p>
    </div>
  </>
);

User.propTypes = {

  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    geo: PropTypes.shape({
      lat: PropTypes.string.isRequired,
      lng: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
