import React from 'react';
import PropTypes from 'prop-types';

function User({ name, email, address }) {
  return (
    <div className="post__author">
      <span className="post__author-name">{name}</span>
      <a href="link" className="post__author-email">{email}</a>
      <span className="post__author-address">
        {`${address.street} ${address.suite} ${address.city}`}
      </span>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default User;
