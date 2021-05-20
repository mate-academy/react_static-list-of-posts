import React from 'react';
import PropTypes from 'prop-types';

function User({name, mail, address}) {
  return (
    <>
      <p>
        {name}
      </p>

      <p>
        {mail}
      </p>

      <p>
        {address.city}
        {address.suite}
        {address.street}
      </p>
    </>
  )
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
