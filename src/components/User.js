import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <div className="user">
    <p className="user__name">{name}</p>
    <p className="user__email">{email}</p>
    <p>
      {`Address: `}
      {address.street}
      {address.city}

    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.objectOf({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
};
export default User;
