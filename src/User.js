import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user: { name, email, address } }) => (
  <p>
    {`Author: ${name}`}
    <br />
    {`Email: ${email}`}
    <br />
    {`Address: ${address.street}, ${address.suite}, ${address.city}`}
  </p>
);

User.propTypes
  = { user: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default User;
