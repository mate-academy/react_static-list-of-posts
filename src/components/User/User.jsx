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
      {`Leaving: ${address.city}`}
    </p>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};
