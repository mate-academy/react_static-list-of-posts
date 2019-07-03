import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name = null, username = null, email, address = null }) => (
  <div className="post-list__user">
    {name}
    {username && `(${username})`}
    <br />
    {email}
    <br />
    {address && `${address.city}, ${address.street} Street`}
  </div>
);

User.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string,
    street: PropTypes.string,
  }),
};

User.defaultProps = {
  name: null,
  username: null,
  address: null,
};

export default User;
