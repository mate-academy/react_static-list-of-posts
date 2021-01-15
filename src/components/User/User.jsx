import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div>
    <b>
      {`Name: `}
    </b>
    {name}
    <br />
    <b>
      {`Email: `}
    </b>
    <a href={`mailto:${email}`}>
      {email}
    </a>
    <br />
    <b>
      {`Address: `}
    </b>
    {address.city}
    {', '}
    {address.street}
    {', '}
    {address.suite}
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};
