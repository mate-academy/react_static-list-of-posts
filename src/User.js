import PropTypes from 'prop-types';
import React from 'react';

const User = ({ userId }) => (
  <div>
    <p>{userId.name}</p>
    <p>{userId.username}</p>
  </div>
);

User.propTypes = {
  userId: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
};

export default User;
