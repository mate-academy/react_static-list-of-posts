import React from 'react';
import PropTypes from 'prop-types';

import './User.css';

function User({ user }) {
  const { name, email, address } = user;
  const { city, street, suite } = address;

  return (
    <div className="user">
      <p>{`Author: ${name}`}</p>
      <p>{`Email: ${email}`}</p>
      <p>{`Address: ${city}, ${street}, ${suite}`}</p>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      address: PropTypes.array,
    }),
  ).isRequired,
};

export default User;
