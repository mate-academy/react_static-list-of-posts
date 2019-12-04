import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (

  <>
    <p>
     Name:
      {' '}
      {user.name}
      {'  '}
     E-mail:
      {' '}
      {user.email}
    </p>
    <p>
    Address:
      {' '}
      {user.address.city}
      {user.address.street}
      {user.address.suite}
      {'  '}
    Zipcode:
      {' '}
      {user.address.zipcode}
    </p>

  </>
);

User.propTypes = {
  user: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ])),
};
User.defaultProps = { user: [] };
export default User;
