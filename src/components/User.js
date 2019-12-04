import React from 'react';
import PropTypes from 'prop-types';

const User = ({ userObj: { name, email, address } }) => (
  <p>
    <h4 className="ui brown header">
      {`By ${name}`}
    </h4>
    {email}
    <br />
    {`${address.street}, ${address.suite}, ${address.city}`}
  </p>
);

User.propTypes
  = { userObj: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default User;
