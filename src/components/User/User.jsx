import React from 'react';
import PropTypes from 'prop-types';
import UserShape from '../../Types';

const User = ({ users, id }) => (
  <>
    <p>{users.find(user => user.id === id).name}</p>
    <p>{users.find(user => user.id === id).email}</p>
    <p>{users.find(user => user.id === id).address.city}</p>
    <p>{users.find(user => user.id === id).address.street}</p>
  </>
);

User.propTypes = {
  users: PropTypes.objectOf(UserShape).isRequired,
  id: PropTypes.number.isRequired,
};

export default User;
