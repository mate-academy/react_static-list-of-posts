import React from 'react';
import PropTypes from 'prop-types';

const User = ({ address }) => (
  <>
    <address>
      Author address:
      {address.city}
    </address>
    <address>{address.street}</address>
    <address>{address.suite}</address>
  </>
);

User.propTypes
  = {
    address: PropTypes.oneOfType([PropTypes.object])
      .isRequired,
  };

export default User;
