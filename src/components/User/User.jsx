import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <>
    {`${user.name}`}
    <cite title="Source Title">
      <p>
        {`${user.email}, ${user.address.street},`
        + ` ${user.address.suite}, ${user.address.city},`
        + ` ${user.address.zipcode},`
        + `${user.address.geo.lat}, ${user.address.geo.lng}`}
      </p>
    </cite>
  </>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.number.isRequired,
      geo: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
