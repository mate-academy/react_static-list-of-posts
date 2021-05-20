import React from 'react';
import PropTypes from 'prop-types';

function User({ name, email, address }) {
  return (
    <p className="user">
      {`Users: ${name},
      ${email},
      ${address.city},
      ${address.street},
      ${address.suite}`}
    </p>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string,
    suite: PropTypes.string,
  }).isRequired,
};

export default User;
