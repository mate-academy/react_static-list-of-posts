import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

const User = ({ email, name, address }) => (
  <>
    <div>{name}</div>
    <div>{email}</div>
    <div>
      {`${address.city}, ${address.street}, ${address.suite}`}
    </div>
  </>
);

User.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
