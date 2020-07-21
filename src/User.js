import React from 'react';
import PropTypes from 'prop-types/';

const User = ({ user }) => {
  const { name, email, address } = user;

  return (
    <>
      <h3>User info:</h3>
      <p>
        Name:
        {' '}
        {name}
        <br />
        Email:
        {' '}
        {email}
        <br />
        Address:
        {' '}
        {address.street}
      </p>
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.object,
    email: PropTypes.string,
  }),
};

User.defaultProps = {
  user: {},
};

export default User;
