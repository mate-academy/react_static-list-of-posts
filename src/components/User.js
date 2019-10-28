import React from 'react';
import PropTypes from 'prop-types';

export default function User({ email, name, address }) {
  const splittedAddress = address.street && splitAddress(address);

  return (
    <p>
      Author:
      {name}
      (
      {email}
      )
      {splittedAddress || ''}
    </p>
  );
}

function splitAddress(address) {
  return (`, Address: 
  ${address.street}
  ${address.suite} 
  ${address.city} 
  ${address.zipcode}`);
}

User.defaultProps = { address: {}, name: '' };
User.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string,
  address: PropTypes.objectOf({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }),
};
