import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <div className="user-name">{name}</div>
    <div className="user-email">{email}</div>
    <adress className="user-addres">
      {`${address.street}, ${address.suite},
      ${address.city}, ${address.zipcode}`}
    </adress>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
