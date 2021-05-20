import React from 'react';
import PropTypes from 'prop-types';

export const User = ({
  name,
  email,
  address,
}) => (
  <>
    <h3 className="user__name">
      {name}
    </h3>

    <p className="user__email">
      {`Email address: ${email}`}
    </p>

    <p className="user__adress">
      {`Live: ${address.city}`}
    </p>
  </>
);
