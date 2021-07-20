import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => {
  const { name, email } = user;
  const userAddress = { ...user.address };
  const { city, street, suite } = userAddress;

  return (
    <div className="text-muted">
      {name}
      <div>
        {email}
      </div>
      <div>
        {`Address: ${city}, ${street}, ${suite}`}
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
