import React from 'react';
import PropTypes from 'prop-types';

const UserData = ({ user }) => (
  <div>
    <p>{user.name}</p>
    <p>{user.email}</p>
  </div>
);

UserData.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};
export default UserData;
