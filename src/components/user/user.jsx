import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <>
    <p>
      <strong>
        Author
      </strong>
      {' - '}
      <i>
        {name}
      </i>
    </p>
    <p>
      <i>
        e-mail
      </i>
      {' - '}
      {email}
    </p>
    <p>
      <i>
        address
      </i>
      {' - '}
      {address.city}
      {',  '}
      {address.street}
      {',  '}
      {address.suite}
    </p>
  </>
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
