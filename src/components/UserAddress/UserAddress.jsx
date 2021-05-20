import React from 'react';
import PropTypes from 'prop-types';

const UserAddress = ({ city, street }) => (
  <div className="user__contacts">
    <p>{`City: ${city}`}</p>
    <p>{`Street: ${street}`}</p>
  </div>
);

UserAddress.propTypes = {
  city: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
};

export default UserAddress;
