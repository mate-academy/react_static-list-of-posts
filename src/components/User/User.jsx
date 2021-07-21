import React from 'react';
import PropTypes from 'prop-types';
import { UserType } from '../types';

export const User = function User({ user }) {
  return (
    <React.Fragment>
      <strong>{user.name}</strong>
      {' '}
      <span>
        <small>{user.email}</small>
      </span>
      {' '}
      <p>
        <small>
          {`Address:
            ${user.address.street} street,
            ${user.address.suite},
            ${user.address.city} city,
            ZIP ${user.address.zipcode},
            Location latitude - ${user.address.geo.lat},
            Location longitude - ${user.address.geo.lng}
          `}
        </small>
      </p>
    </React.Fragment>
  );
};

User.propTypes = PropTypes.shape({ UserType });
