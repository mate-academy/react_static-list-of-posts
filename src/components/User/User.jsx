import React from 'react';
import PropTypes from 'prop-types';
import { UserType } from '../types';

export const User = function User({ nameOfUser, email, address }) {
  return (
    <React.Fragment>
      <strong>{nameOfUser}</strong>
      {' '}
      <span>
        <small>{email}</small>
      </span>
      {' '}
      <p>
        <small>
          {`Address:
            ${address.street} street,
            ${address.suite},
            ${address.city} city,
            ZIP ${address.zipcode},
            Location latitude - ${address.geo.lat},
            Location longitude - ${address.geo.lng}
          `}
        </small>
      </p>
    </React.Fragment>
  );
};

User.propTypes = PropTypes.shape({ UserType });
