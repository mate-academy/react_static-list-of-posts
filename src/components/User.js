import React from 'react';
import PropTypes from 'prop-types';

const User = ({
  userName,
  email,
  address,
}) => (
  <>
    <h5>{userName}</h5>
    <span>{`(${email})`}</span>
    <p>{address.city}</p>
  </>
);

User.propTypes = {
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
