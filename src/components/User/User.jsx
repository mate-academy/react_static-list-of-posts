import React from 'react';
import PropTypes from 'prop-types';

export const User = ({
  name,
  email,
  address,
}) => (
  <>
    <p>{`Author of post: ${name}`}</p>
    <p>{`Author email: ${email}`}</p>
    <p>
      {`Author address: city ${address.city}, street ${address.street}`}
    </p>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};
