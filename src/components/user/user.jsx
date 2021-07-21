import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <>
    <p>
      <strong>
        Author
      </strong>
      {' - '}
      <i>
        {user.name}
      </i>
    </p>
    <p>
      <i>
        e-mail
      </i>
      {' - '}
      {user.email}
    </p>
    <p>
      <i>
        address
      </i>
      {` - ${user.address.city}, ${user.address.street}, ${user.address.suite}`}
    </p>
  </>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
