import React from 'react';
import PropTypes from 'prop-types';

function User({ newUsers }) {
  return (
    <div className="'block'">
      <h1>
        {newUsers.name}
      </h1>
      <h2>
        {newUsers.email}
        {newUsers.address.street}
      </h2>
    </div>
  );
}

User.propTypes = {
  newUsers: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default User;
