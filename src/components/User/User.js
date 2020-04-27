import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <div className="User">
    <span>
      {`Name: ${name}`}
    </span>

    <a href={`mailto: ${email}`}>
      {`Email: ${email}`}
    </a>

    <div>
      {`City: ${address.city}`}
      <br />
      {`Street: ${address.street}`}
      <br />
      {`Suite: ${address.suite}`}
    </div>
  </div>
);

export default User;

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};
