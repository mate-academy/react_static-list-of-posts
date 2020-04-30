import React from 'react';
import PropTypes from 'prop-types';

function Address({ street, suite, city }) {
  return (
    <div className="post__author-address">
      <p>Author address:</p>
      <p>
        <strong>City:</strong>
        {city}
      </p>
      <p>
        <strong>Street:</strong>
        {street}
      </p>
      <p>
        <strong>Suite:</strong>
        {suite}
      </p>
    </div>
  );
}

function User({ name, email, address }) {
  return (
    <div className="post__author">
      <p className="post__author-name">
        {name}
      </p>
      <p className="post__author-email">
        {email}
      </p>

      <Address
        street={address.street}
        suite={address.suite}
        city={address.city}
      />
    </div>
  );
}

export default User;

Address.propTypes = PropTypes.shape({
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
}).isRequired;

User.propTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({}).isRequired,
}).isRequired;
