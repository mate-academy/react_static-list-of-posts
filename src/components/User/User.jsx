import React from 'react';
import PropTypes from 'prop-types';

export const User = ({
  name,
  email,
  address,
}) => (
  <>
    <span>{name.toUpperCase()}</span>
    <p>{email}</p>
    <div>
      {`${address.city} ${address.street} ${address.suite}`}
    </div>
  </>
);

User.propTypes = ({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }),
}).isRequired;
