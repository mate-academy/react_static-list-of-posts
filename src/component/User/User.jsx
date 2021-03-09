import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <>
    <p>{user.name}</p>
    <p>{user.email}</p>
    <p>
      {`Street: ${user.address.street}`}
    </p>
    <p>
      {`City: ${user.address.city}`}
    </p>
    <p>
      {`Suite: ${user.address.suite}`}
    </p>
  </>
);

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

User.defaultProps = {
  user: null,
};
