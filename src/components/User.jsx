import React from 'react';
import PropTypes from 'prop-types';

export const User = ({
  name,
  email,
  address,
}) => {
  const { street, suite, city } = address;

  return (
    <>
      {`Author: ${name}`}
      <br />
      <a href={`mailto:${email}`}>{email}</a>
      <br />
      <p>
        {`${street} St., `}
        {suite}
        <br />
        <strong>
          {city}
        </strong>
      </p>
    </>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};
