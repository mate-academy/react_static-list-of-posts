import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <div>
    <span>
      {`Name: ${name} `}
    </span>
    <a href={`mailto:${email}`}>
      {`${email}`}
    </a>
    <p>
      <span>{`city: ${address.city}`}</span>
      <span>{`street: ${address.street}`}</span>
      <span>{`suit: ${address.suite}`}</span>
      <span>{`ZIP: ${address.zipcode}`}</span>
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
