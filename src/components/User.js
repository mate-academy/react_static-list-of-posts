import React from 'react';
import PropTypes from 'prop-types';

function User({ name, email, address }) {
  return (
    <div className="user">
      <p>{name}</p>
      <p className="user__email">{email}</p>
      <p className="user__street">{address.street}</p>
      <p className="user__suite">{address.suite}</p>
      <p>{address.city}</p>
      <p>{address.zipcode}</p>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
  ).isRequired,
};

export default User;
