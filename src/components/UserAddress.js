import React from 'react';
import PropTypes from 'prop-types';

const UserAddress = ({ info }) => (
  <div className="user__address">
    <address>
      {info.street}
      ,
      {info.suite}
      ,
      {info.city}
      ,
      {info.zipcode}
      ,
    </address>
  </div>
);

UserAddress.propTypes = {
  info: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
export default UserAddress;
