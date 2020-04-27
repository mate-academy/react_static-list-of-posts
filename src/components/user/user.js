import React from 'react';

import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <>
      <strong>{`${user.name} `}</strong>
      <span>{`${user.email} `}</span>
      <span>{`${user.address.city} `}</span>
      <span>{`${user.address.street} `}</span>
      <span>{`${user.address.suite} `}</span>
    </>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
    }).isRequired,

  }).isRequired,

};

export default User;
