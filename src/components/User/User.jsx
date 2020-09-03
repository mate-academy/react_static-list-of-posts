import React from 'react';
import PropTypes from 'prop-types';
import '../User/User.css';

function User({name, address, email}) {
  return (
    <div className="post__info-user">
      <p className="post__name">
        {name}
      </p>
      <p>From: {address.city}</p>
      <span className="post__email">
        Email:
        <a href="#"> {email}</a>
      </span>
    </div>
  )
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired
}

export default User;

