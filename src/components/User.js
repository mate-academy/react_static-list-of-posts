import React from 'react';

import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div className="User">
    <p>{user.name}</p>
    <p>{user.email}</p>
    <p>
      {user.address.zipcode}
      ,&nbsp;
      {user.address.city}
      ,&nbsp;
      {user.address.street}
      ,&nbsp;
      {user.address.suite}
    </p>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.object,
  }).isRequired,
};

export default User;
