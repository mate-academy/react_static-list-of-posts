import React from 'react';
import PropTypes from 'prop-types';

import './User.css';

const User = ({ user }) => (
  <p className="Post__User">
    {
      `Name: ${user.name} 
      Email: ${user.email} 
      Address: ${user.address.street} 
      ${user.address.suite} 
      ${user.address.city} 
      ${user.address.zipcode}`
    }
  </p>
);

export default User;

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired,
  }).isRequired,
};
