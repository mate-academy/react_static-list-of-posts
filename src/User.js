import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <div className="user-info">
      <div>
        <h2>User Name:</h2>
        <p>{user.name}</p>
      </div>
      <div>
        <h2>User City:</h2>
        <p>{user.address.city}</p>
      </div>
      <div>
        <h2>User Phone:</h2>
        <p>{user.phone}</p>
      </div>
      <div>
        <h2>User E-mail::</h2>
        <p>{user.email}</p>
      </div>

    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired,
  }).isRequired,
};

export default User;
