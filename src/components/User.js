import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <div className="post_author">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>
        {user.address.street}
        /
        {user.address.suite}
        /
        {user.address.city}
      </p>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.objectOf(PropTypes).isRequired,
};

export default User;
