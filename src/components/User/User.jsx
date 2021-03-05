import React from 'react';
import PropTypes from 'prop-types';

export const User = ({
  name,
  email,
  address,
}) => (
  <>
    <p>
      {name}
    </p>
    <p>
      {email}
    </p>
    <p>
      {`${address.city}, ${address.street}, ${address.suite}`}
    </p>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }),
};

User.defaultProps = {
  address: null,
};
