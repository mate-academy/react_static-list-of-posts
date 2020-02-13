import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

const User = ({ person }) => (
  <div className="user">
    <h3 className="user__heading">
      {person.name}
    </h3>
    <p className="user__email">
      E-mail:
      <span>
        {` ${person.email}`}
      </span>
    </p>
    <address className="user__address">
      <span>
        street:
        {` ${person.address.street}`}
      </span>
      <span>
        suite:
        {` ${person.address.suite}`}
      </span>
      <span>
        city:
        {` ${person.address.city}`}
      </span>
      <span>
        zipcode:
        {` ${person.address.zipcode}`}
      </span>
    </address>
  </div>
);

User.propTypes = {
  person: PropTypes.shape({
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
