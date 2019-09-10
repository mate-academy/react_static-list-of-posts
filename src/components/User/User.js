import React from 'react';

import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>
        {`
          ${user.address.city},
          ${user.address.street},
          ${user.address.suite}
        `}
      </div>
    </div>
  );
}

const shape = PropTypes.shape({
  city: PropTypes.string,
  street: PropTypes.string,
  suite: PropTypes.string,
});

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: shape.isRequired,
  }).isRequired,
};

export default User;
