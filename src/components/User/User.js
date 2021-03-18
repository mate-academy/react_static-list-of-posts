import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <>
    <div>
      Autor:
      {' '}
      {name}
    </div>
    <div>
      <a href={`mailto:${email}`}>
        email:
        {' '}
        {email}
      </a>
    </div>
    <p className="adress">
      {`City: ${address.city},
      street: ${address.street},
      zip: ${address.zipcode};`}
    </p>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
