import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <div className="user">
    <h4 className="user-name">
      {'Author: '}
      {name}
    </h4>
    <p className="user-email">
      {'Email: '}
      {email}
    </p>
    <p className="user-adress">
      {'City: '}
      {address.city}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
