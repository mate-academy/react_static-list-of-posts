import React from 'react';
import PropTypes from 'prop-types';

const User = ({ userObj: { name, email, address } }) => (
  <p>
    {`By ${name}`}
    <br />
    {email}
    <br />
    {`${address.street}, ${address.suite}, ${address.city}`}
  </p>
);

User.propTypes
  = { userObj: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default User;
