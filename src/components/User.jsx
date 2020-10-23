import React from 'react';
import PropTypes from 'prop-types';

export function User({ user }) {
  const address = `${user.address.city},
   ${user.address.street}, ${user.address.suite}. `;

  return (
    <div className="post__author">
      <p className="post__author-name">{user.name}</p>
      <p>{user.email}</p>
      <p>{address}</p>
    </div>
  );
}

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
