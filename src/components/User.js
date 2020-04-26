import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <div className="post__user">
    <p>
      <b>
        Name:
        {' '}
      </b>
      {name}
    </p>
    <a href={`mailto: ${email}`}>
      {email}
    </a>
    <p>
      <b>
        City:
        {' '}
      </b>
      {address.city}
    </p>
    <p>
      <b>
        Street:
        {' '}
      </b>
      {address.street}
    </p>
    <p>
      <b>
        Apartment:
        {' '}
      </b>
      {address.suite}
    </p>
  </div>
);

export default User;

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};
