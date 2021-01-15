import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div>
    <p>
      Author:
      <strong>
        {' '}
        {name}
      </strong>
    </p>
    <p>
      Adress:
      {
        ` ${address.zipcode} ${
          address.city}, ${
          address.street}, ${
          address.suite}`}
    </p>
    <p>
      Email:
      <span className="App__email">
        {' '}
        {email}
      </span>
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
