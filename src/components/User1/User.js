import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <>
    <p className="userInfo">
      {`Name of the author: ${name}`}

      <br />

      <span className="email">
        {`Email: ${email}`}
      </span>

      <br />

      {`Address: ${address.street}, ${address.suite},
       ${address.city}, ${address.zipcode}`}

      <br />

      {`Geo location: ${address.geo.lat}, ${address.geo.lng}`}
    </p>
  </>
);

export const userType = {
  name: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
    geo: PropTypes.shape({
      lat: PropTypes.string,
      lng: PropTypes.string,
    }),
  }),
};

User.propTypes = {
  name: userType.name.isRequired,
  email: userType.email.isRequired,
  address: userType.address.isRequired,
};
