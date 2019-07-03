import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, username, email, city, street }) => (
  <div className="post-page__user">
    {name}
    {username && `(${username})`}
    <br />
    {email}
    <br />
    {city && `City: ${city}`}
    <br />
    {street && `Street: ${street}`}
  </div>
);

User.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string.isRequired,
  city: PropTypes.string,
  street: PropTypes.string,
};

User.defaultProps = {
  name: null,
  username: null,
  city: null,
  street: null,
};

export default User;
