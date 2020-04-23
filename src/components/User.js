import React from 'react';
import PropTypes from 'prop-types';

function User({ user: { name, email,
  address: { street, city, suite, zipcode } } }) {
  return (
    <p className="posts__user">
      <span>
        {`Name: ${name}`}
      </span>
      <span>
        {`Email: ${email}`}
      </span>
      <span>
        {`City: ${city}, street: ${street}, suite: ${suite} zip: ${zipcode}`}
      </span>
    </p>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default User;
