import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ city, street, zipcode, suite }) => (
  <p className="address">
    City:&nbsp;
    {city}
    , zipcode:&nbsp;
    {zipcode}
    , street:&nbsp;
    {street}
    , suite:&nbsp;
    {suite}
  </p>
);

UserInfo.propTypes = {
  city: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
};

export default UserInfo;
