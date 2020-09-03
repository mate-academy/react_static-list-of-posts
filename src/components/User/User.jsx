import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

const User = ({ name, email, address }) => (
  <div className="post__user">
    <p>{email}</p>
    <p>
      {
        `${name}, ${address.city}`
      }
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
