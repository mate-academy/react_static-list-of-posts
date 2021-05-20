import React from 'react';

import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <>
    <p>{user.name}</p>
    <p>{user.email}</p>
    <p>{`${user.address.street} ${user.address.suite} ${user.address.city}`}</p>
  </>
);

const addressData = {
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

const postLists = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape(addressData),
};

User.propTypes = {
  user: PropTypes.shape(postLists).isRequired,
};
