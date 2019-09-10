import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  const { name, username, email } = user;

  return (
    <>
      <h2>{name}</h2>
      <p>{username}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default User;
