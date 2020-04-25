import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <>
    <li>
      <span>{name}</span>
    </li>
    <li>
      <span>{email}</span>
    </li>
    <li>
      <span>
        {address.city}
        ,
      </span>
      <span>
        {address.street}
        ,
      </span>
      <span>{address.zipcode}</span>
    </li>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
