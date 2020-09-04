import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <>
    <span>
      Name:
      {name}
      {' '}
      /
    </span>
    <span>
      {' '}
      Email:
      {email}
    </span>
    <div className="address">
      <span>
        Address ( City: &quot;
        {address.city}
        &quot;
        str. &quot;
        {address.street}
        &quot;&nbsp;
        {address.suite}
        )
      </span>
    </div>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape().isRequired,
};
